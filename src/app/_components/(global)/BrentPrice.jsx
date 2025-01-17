import Image from "next/image";
import React from "react";

const BrentPriceDisplay = ({ price, priceChange, isLoading }) => {
  const getPriceChangeIndicator = () => {
    if (priceChange === "Increase") return <span style={{ color: "green" }}>↑</span>;
    if (priceChange === "Decrease") return <span style={{ color: "red" }}>↓</span>;
    return <span style={{ color: "gray" }}>→</span>;
  };

  if (isLoading) {
    return <p>Loading Brent Price...</p>;
  }

  return price !== "N/A" ? (
    <div className="flex flex-row items-center bg-white/60 text-black px-4  rounded-lg shadow-md">
      <Image src="/image/oil_logo.svg" alt="Brent Oil" width={14} height={14} />
      <p className=" text-sm">: ${price}</p>
      {priceChange && <p className="ml-2 text-lg">{getPriceChangeIndicator()}</p>}
    </div>
  ) : (
    <p>Failed to fetch Brent price. Please try again later.</p>
  );
};

export default BrentPriceDisplay;
