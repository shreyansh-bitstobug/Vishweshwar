"use client";

import { useState, useEffect, useCallback } from "react";

const BIN_ID = "6767b61eacd3cb34a8bda3fd";
const API_KEY = "$2a$10$OGWsx0lai/B0nM.JzkEBPObCNjN.08HJL9XowKK9yJcaIOPX5cfSq";
const EXCHANGE_API_URL =
  "http://api.exchangeratesapi.io/v1/latest?access_key=2c522db3c1e75405246fa29177777ed2"; // Added INR to symbols

const useDollarPrice = () => {
  const [price, setPrice] = useState("N/A");
  const [prevPrice, setPrevPrice] = useState("N/A");
  const [priceChange, setPriceChange] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [priceHistory, setPriceHistory] = useState([]);

  // Compare the prices to determine increase or decrease
  const comparePrices = (current, previous) => {
    if (current > previous) {
      setPriceChange("Increase");
    } else if (current < previous) {
      setPriceChange("Decrease");
    } else {
      setPriceChange(null);
    }
  };

  // Function to fetch exchange rates
  const fetchExchangeRates = useCallback(async () => {
    try {
      console.log("Fetching cached data from JSONBin...");
      const jsonBinResponse = await fetch(
        `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
        {
          headers: { "X-Master-Key": API_KEY },
        }
      );
  
      console.log("JSONBin response status:", jsonBinResponse.status);
  
      if (!jsonBinResponse.ok) {
        throw new Error("Failed to fetch from JSONBin. Status: " + jsonBinResponse.status);
      }
  
      const jsonBinData = await jsonBinResponse.json();
      console.log("Fetched cached data from JSONBin:", jsonBinData);
  
      const ratesHistory = jsonBinData?.record || [];
      console.log("Rates history:", ratesHistory);
  
      if (Array.isArray(ratesHistory) && ratesHistory.length > 0) {
        const latestEntry = ratesHistory[0];
        const oneDay = 24 * 60 * 60 * 1000;
        const lastUpdated = new Date(latestEntry.updatedAt).getTime();
        const currentTime = new Date().getTime();
  
        if (currentTime - lastUpdated < oneDay) {
          console.log("Using cached data (less than one day old):", ratesHistory);
          return ratesHistory;
        }
      }
  
      console.log("Cached data is expired or missing. Fetching fresh data...");
      const freshRates = await fetchAndUpdateRates(ratesHistory);
      return freshRates;
    } catch (error) {
      console.error("Error in fetchExchangeRates:", error);
      return null;
    }
  }, []);
  

  const fetchAndUpdateRates = async (existingHistory = []) => {
    try {
      // Fetch new exchange rate data from the API
      const apiResponse = await fetch(EXCHANGE_API_URL);
      const apiData = await apiResponse.json();

      if (!apiData || !apiData.rates) {
        throw new Error("Invalid API response: Missing rates");
      }

      // Create new entry
      const newEntry = {
        rates: apiData.rates,
        updatedAt: new Date().toISOString(),
      };

      // Combine new entry with existing history, limiting to last 7 entries
      const updatedHistory = [newEntry, ...existingHistory].slice(0, 7);

      // Update JSONBin with the new history
      await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify(updatedHistory),
      });

      console.log(
        "Updated JSONBin with fresh exchange rates history:",
        updatedHistory
      );
      return updatedHistory;
    } catch (error) {
      console.error("Failed to fetch or update rates:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const ratesHistory = await fetchExchangeRates();
      if (ratesHistory && ratesHistory.length > 0) {
        // Get INR rate from latest entry
        const currentRate = ratesHistory[0].rates.INR;
        setPrice(currentRate.toFixed(2));

        // Get previous INR rate
        const previousRate = ratesHistory[1]?.rates.INR ?? currentRate;
        setPrevPrice(previousRate);

        // Compare current and previous prices
        comparePrices(currentRate, previousRate);

        // Update price history
        setPriceHistory(ratesHistory);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [fetchExchangeRates]);

  return {
    price, // This will now be INR value
    prevPrice, // This will now be previous INR value
    priceChange,
    isLoading,
    priceHistory, // Contains full history with INR rates
  };
};

export default useDollarPrice;
