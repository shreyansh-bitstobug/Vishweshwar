import React from "react";

const DollarPriceDisplay = ({ price, priceChange, isLoading }) => {
  const getPriceChangeIndicator = () => {
    if (priceChange === "Increase") return <span style={{ color: "green" }}>↑</span>;
    if (priceChange === "Decrease") return <span style={{ color: "red" }}>↓</span>;
    return <span style={{ color: "gray" }}>→</span>;
  };

  if (isLoading) {
    return <p>Loading Dollar Price...</p>;
  }

  return price !== "N/A" ? (
    <div className="flex flex-row items-center bg-white/60 text-black px-4 rounded-lg shadow-md">
      <p className="font-bold text-md">$<span className="font-normal text-sm">: {price}</span></p>
      {priceChange && <p className="ml-2 text-lg">{getPriceChangeIndicator()}</p>}
    </div>
  ) : (
    <p>Failed to fetch dollar price. Please try again later.</p>
  );
};

export default DollarPriceDisplay;