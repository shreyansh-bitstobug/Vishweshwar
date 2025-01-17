import Image from 'next/image';
import React from 'react';

const OilPriceDisplay = ({ price, priceChange }) => {
  const getPriceChangeIndicator = () => {
    if (priceChange === "Increase") {
      return <span style={{ color: 'green' }}>↑</span>;
    } else if (priceChange === "Decrease") {
      return <span style={{ color: 'red' }}>↓</span>;
    } else {
      return null;
    }
  };

  return (
    <div className='flex flex-row items-center bg-white/60 text-black px-2 rounded-lg shadow-md'>
      <Image src="/image/oil_logo.svg" alt="Oil barrel" width={15} height={15} />
      <p className='ml-2'>: ${price}</p>
      {priceChange && (
        <p className='ml-2 font-black'>
          {getPriceChangeIndicator()}
        </p>
      )}
    </div>
  );
};

export default OilPriceDisplay;