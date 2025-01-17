"use client";
const { useState, useEffect, useCallback } = require("react");

const useBrentPrice = () => {
  const [price, setPrice] = useState(null);
  const [prevPrice, setPrevPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [priceChange, setPriceChange] = useState(null);

  const BIN_ID = "67611731e41b4d34e466b583"; // Replace with your JSONBin Bin ID
  const API_KEY =
    "$2a$10$OGWsx0lai/B0nM.JzkEBPObCNjN.08HJL9XowKK9yJcaIOPX5cfSq"; // Replace with your JSONBin API Key
  const BRENT_API_URL =
    "https://www.alphavantage.co/query?function=BRENT&interval=daily&apikey=V7E243ZW2PA0D94R"; // Replace with actual API URL

  // Memoized function
  const fetchBrentPrice = useCallback(async () => {
    try {
      const jsonBinResponse = await fetch(
        `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
        { headers: { "X-Master-Key": API_KEY } }
      );
  
      const jsonBinData = await jsonBinResponse.json();
      console.log("JSONBin Response:", jsonBinData);
  
      // Correctly access the nested record array
      const records = jsonBinData?.record?.record;
  
      if (!records || !Array.isArray(records) || records.length === 0) {
        console.log("No valid records found in JSONBin. Fetching fresh data...");
        await fetchAndUpdateNewData();
        return;
      }
  
      const { price: storedPrice, updatedAt } = records[0];
      const { price: prevStoredPrice, updatedAt: previousUpdate } = records[1] || {};
  
      console.log("Stored Price:", storedPrice);
      console.log("Previous Price:", prevStoredPrice);
      console.log("Updated At:", updatedAt);
      console.log("Last Updated At:", previousUpdate);
  
      if (!storedPrice || !updatedAt) {
        console.log("Incomplete data in JSONBin. Fetching fresh data...");
        await fetchAndUpdateNewData();
        return;
      }
  
      const oneDay = 24 * 60 * 60 * 1000;
      const lastUpdated = new Date(updatedAt).getTime();
      const previousLastUpdated = new Date(previousUpdate).getTime();
      const currentTime = new Date().getTime();
  
      if (currentTime - lastUpdated < oneDay) {
        console.log("Using cached price data");
        setPrice(storedPrice);
        setPrevPrice(prevStoredPrice);
        comparePrices(storedPrice, prevStoredPrice);
      } else {
        console.log("Cached data expired. Fetching fresh price data...");
        await fetchAndUpdateNewData();
      }
    } catch (error) {
      console.error("Error fetching Brent price:", error);
      await fetchAndUpdateNewData();
    } finally {
      setIsLoading(false);
    }
  }, []);
  

  const fetchAndUpdateNewData = async () => {
    try {
      // Fetch data from the API
      const apiResponse = await fetch(BRENT_API_URL);
      const apiData = await apiResponse.json();
  
      if (!apiData || !apiData.data || apiData.data.length < 2) {
        throw new Error("Invalid API response: Missing data for today and yesterday");
      }
  
      // Extract today's and yesterday's prices
      const todayPrice = parseFloat(apiData.data[0]?.value); // Latest price
      const yesterdayPrice = parseFloat(apiData.data[1]?.value); // Previous price
  
      if (isNaN(todayPrice) || isNaN(yesterdayPrice)) {
        throw new Error("Invalid price data from API");
      }
  
      // Update JSONBin with today's and yesterday's prices
      await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify({
          record: [
            { price: todayPrice, updatedAt: new Date().toISOString() },
            { price: yesterdayPrice, updatedAt: new Date().toISOString() },
          ],
        }),
      });
  
      console.log("Updated JSONBin with today's and yesterday's prices");
  
      // Update local state
      setPrice(todayPrice);
      setPrevPrice(yesterdayPrice);
      comparePrices(todayPrice, yesterdayPrice);
    } catch (error) {
      console.error("Failed to fetch or update price:", error);
      setPrice("N/A");
      setPrevPrice("N/A");
    }
  };
  

  const comparePrices = (current, previous) => {
    if (previous !== undefined) {
      if (current > previous) {
        setPriceChange("Increase");
      } else if (current < previous) {
        setPriceChange("Decrease");
      } else {
        setPriceChange("No Change");
      }
    }
  };

  useEffect(() => {
    fetchBrentPrice();
  }, [fetchBrentPrice]);
  return { price, priceChange, isLoading };
};

export default useBrentPrice;
