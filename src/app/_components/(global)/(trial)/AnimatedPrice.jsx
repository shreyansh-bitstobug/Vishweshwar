"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DollarPriceDisplay from "../DollarPriceDisplay";
import BrentPrice from "../BrentPrice";

const AnimatedPriceDisplay = ({
  dollarPrice,
  dollarChange,
  dollarLoading,
  brentPrice,
  brentChange,
  brentLoading,
}) => {
  const [showBrent, setShowBrent] = useState(true); // Toggle between Brent and Dollar

  // Periodically toggle between Brent and Dollar every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBrent((prev) => !prev);
      console.log("Toggled showBrent:", !showBrent);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [showBrent]);

  useEffect(() => {
    console.log("DollarPriceDisplay props:", {
      dollarPrice,
      dollarChange,
      dollarLoading,
    });
  }, [dollarPrice, dollarChange, dollarLoading]);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {showBrent ? (
          <motion.div
            key="brent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 14 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <BrentPrice
              price={brentPrice}
              priceChange={brentChange}
              isLoading={brentLoading}
            />
          </motion.div>
        ) : (
          <motion.div
            key="dollar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 14 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <DollarPriceDisplay
              price={dollarPrice}
              priceChange={dollarChange}
              isLoading={dollarLoading}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedPriceDisplay;
