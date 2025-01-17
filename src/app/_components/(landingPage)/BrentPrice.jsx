// "use client";
// import React, { useEffect, useState } from "react";

// const BrentPrice = () => {
//   const [price, setPrice] = useState(null);
//   const [prevPrice, setPrevPrice] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [priceChange, setPriceChange] = useState(null); // Track price change (increase/decrease)

//   const BIN_ID = "67611731e41b4d34e466b583"; // Replace with your JSONBin Bin ID
//   const API_KEY = "$2a$10$OGWsx0lai/B0nM.JzkEBPObCNjN.08HJL9XowKK9yJcaIOPX5cfSq"; // Replace with your JSONBin API Key
//   const BRENT_API_URL =
//     "https://www.alphavantage.co/query?function=BRENT&interval=daily&apikey=V7E243ZW2PA0D94R"; // Replace with actual API URL

//   const fetchBrentPrice = async () => {
//     try {
//       // Step 1: Fetch data from JSONBin
//       const jsonBinResponse = await fetch(
//         `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
//         { headers: { "X-Master-Key": API_KEY } }
//       );
      
//       const jsonBinData = await jsonBinResponse.json();
      
//       console.log("JSONBin Response:", jsonBinData);
      
//       // Step 2: Handle missing or unexpected JSONBin response
//       const records = jsonBinData?.record;
      
//       if (!records || !Array.isArray(records) || records.length === 0) {
//         console.log("No valid records found in JSONBin. Fetching fresh data...");
//         await fetchAndUpdateNewData();
//         return;
//       }
      
//       // Access the most recent record
//       const { price: storedPrice, updatedAt } = records[0];
//       const { price: prevStoredPrice,updatedAt:previousUpdate} = records[1] || {}; // Fetch the second most recent record

//       console.log("Stored Price:", storedPrice);
//       console.log("Previous Price:", prevStoredPrice);
//       console.log("Updated At:", updatedAt);
//       console.log("Last Updated At:", previousUpdate);
      
//       // Step 3: Validate individual fields
//       if (!storedPrice || !updatedAt) {
//         console.log("Incomplete data in JSONBin. Fetching fresh data...");
//         await fetchAndUpdateNewData();
//         return;
//       }

//       // Step 4: Check if cached data is still valid
//       const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
//       const lastUpdated = new Date(updatedAt).getTime();
//       const previousLastUpdated = new Date(previousUpdate).getTime();
//       const currentTime = new Date().getTime();

//       if (previousLastUpdated - lastUpdated < oneDay) {
//         // Use cached data if valid
//         console.log("Using cached price data");
//         setPrice(storedPrice);
//         setPrevPrice(prevStoredPrice); // Set the previous price
//         comparePrices(storedPrice, prevStoredPrice); // Compare the prices
//       } else {
//         console.log("Cached data expired. Fetching fresh price data...");
//         await fetchAndUpdateNewData();
//       }
//     } catch (error) {
//       console.error("Error fetching Brent price:", error);
//       await fetchAndUpdateNewData(); // Fetch fresh data as a fallback
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchAndUpdateNewData = async () => {
//     try {
//       // Step 4: Fetch fresh price data from the Brent API
//       const apiResponse = await fetch(BRENT_API_URL);
//       const apiData = await apiResponse.json();
//       console.log(apiData)

//       if (!apiData || !apiData.price) {
//         throw new Error("Invalid API response: Missing price data");
//       }

//       const newPrice = apiData.price;

//       // Step 5: Update JSONBin with new data
//       await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Master-Key": API_KEY,
//         },
//         body: JSON.stringify({
//           record: [{ price: newPrice, updatedAt: new Date().toISOString() }, { price: price, updatedAt: new Date().toISOString() }],
//         }),
//       });

//       console.log("Updated JSONBin with fresh data");
//       setPrice(newPrice);
//       setPrevPrice(price); // Save the previous price before the update
//       comparePrices(newPrice, price); // Compare the prices after update
//     } catch (error) {
//       console.error("Failed to fetch or update price:", error);
//       setPrice("N/A"); // Set a fallback value
//     }
//   };

//   // Compare current and previous prices
//   const comparePrices = (current, previous) => {
//     if (previous !== undefined) {
//       if (current > previous) {
//         setPriceChange("Increase");
//       } else if (current < previous) {
//         setPriceChange("Decrease");
//       } else {
//         setPriceChange("No Change");
//       }
//     }
//   };

//   useEffect(() => {
//     fetchBrentPrice();
//   }, []);

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : price !== "N/A" ? (
//         <div>
//           <p>Brent Crude Oil Price: ${price}</p>
//           {priceChange && <p>Price Change: {priceChange}</p>}
//         </div>
//       ) : (
//         <p>Failed to fetch price. Please try again later.</p>
//       )}
//     </div>
//   );
// };

// export default BrentPrice;
