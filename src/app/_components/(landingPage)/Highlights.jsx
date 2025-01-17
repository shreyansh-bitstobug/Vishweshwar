import Image from "next/image";
import React from "react";

const data = [
  {
    title: "Precision Manufacturing",
    description:
      "Our advanced manufacturing processes ensure the production of premium-quality petroleum products. From petrochemicals to industrial oils, we prioritize innovation and efficiency to meet diverse industry needs.",
    keyFocus: [
      "Cutting-edge production facilities",
      "Strict quality control at every stage",
      "Customizable solutions for various industries",
    ],
    image: "/image/highlights/factory.jpg", // Replace with your image URL
  },
  {
    title: "Global Sourcing",
    description:
      "We import top-tier petroleum products from trusted international suppliers, ensuring consistent quality and a wide variety of options for our customers. Our global partnerships make us a reliable name in the industry.",
    keyFocus: [
      "Collaboration with renowned global suppliers",
      "Efficient supply chain management",
      "Ensuring cost-effective solutions for clients",
    ],
    image: "/image/highlights/ship.jpg", // Replace with your image URL
  },
  {
    title: "Trusted Reselling Solutions",
    description:
      "We connect industries with the petroleum products they need, acting as a dependable reseller. Our streamlined distribution network guarantees timely deliveries and competitive pricing  reliable name in the industry.",
    keyFocus: [
      "Extensive product range including lubricants and petrochemicals",
      "Customer-centric approach for tailored solutions",
      "Widespread distribution channels",
    ],
    image: "/image/highlights/reselling.jpg", // Replace with your image URL
  },
];
const Card = React.memo(({ item }) => (
  <div className="card   rounded-2xl flex flex-col items-center text-left flex-grow transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
    <Image
      src={item.image}
      height={400}
      width={400}
      className="w-full rounded-2xl"
      alt={item.title}
    />
    <div className="pr-4 py-10 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl text-sky-700 font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{item.description}</p>
      </div>
      <ul className="text-sm text-gray-400">
        {item.keyFocus.map((focusItem, focusIndex) => (
          <li className="line-clamp-1" key={focusIndex}>• {focusItem}</li>
        ))}
      </ul>
    </div>
  </div>
));

const Highlights = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Highlights;
