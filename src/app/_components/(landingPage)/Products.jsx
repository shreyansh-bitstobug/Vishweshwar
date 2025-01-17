"use client";
import { motion } from "framer-motion";
import { products } from "@/app/lib/products";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeDot, setActiveDot] = useState(0); // Tracks the active dot
  const scrollRef = useRef(null); // Ref for the scrollable container

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Handle dot click to scroll to the respective position
  const handleDotClick = (index) => {
    const container = scrollRef.current;
    const cardWidth = container.scrollWidth / products.length; // Calculate width of a single card
    const scrollPosition = index * cardWidth; // Calculate scroll position

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth", // Smooth scrolling
    });
    setActiveDot(index); // Update the active dot
  };

  // Update active dot when scrolling manually
  const handleScroll = () => {
    const container = scrollRef.current;
    const cardWidth = container.scrollWidth / products.length;
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    setActiveDot(newIndex);
  };

  return (
    <section id="products" className="py-10">
      <div className="px-8 py-12 bg-white rounded-xl">
        {/* Header Section */}
        <div className="bg-neonBlue inline-block p-1 px-4 rounded-md">
          <span className="font-semibold">Products</span>
        </div>
        <h1 className="text-4xl font-bold mb-2 mt-4">Our Product Range</h1>
        <p className="text-gray-700 text-lg">
          We offer a diverse range of high-quality products designed to meet the
          needs of various industries. Our products are known for their
          reliability, efficiency, and performance.
        </p>
        {/* <a
          href="#"
          className="text-sky-400 font-medium flex items-center mb-4 hover:underline"
        >
          View All Products →
        </a> */}

        {/* Horizontal Scrollable Product Cards */}
        <div className="relative">
          <motion.div
            ref={scrollRef}
            className="scroll-container flex space-x-4 sm:space-x-6 pt-2 overflow-x-auto hide-scrollbar"
            drag={isTouchDevice ? false : "x"} // Disable drag on touch devices
            dragConstraints={{ left: -300, right: 0 }}
            onScroll={handleScroll} // Handle manual scrolling
            style={{ scrollBehavior: "smooth" }} // Ensure smooth scroll
          >
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                {" "}
                {/* Use product.id as the key */}
                <motion.div className="flex-shrink-0 relative w-[200px] sm:w-[300px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-4 hover:scale-105 transition-all">
                  {/* Image Placeholder */}
                  <div className="relative h-[250px] sm:h-[400px]">
                    <Image
                      src={product.image}
                      layout="fill"
                      objectFit="cover"
                      alt="product_Image"
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-sky-300/30"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 text-white p-2 sm:p-4">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {product.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-loose clamp-2 overflow-hidden text-ellipsis block">
                        {product.shortDescription}
                      </p>
                      <p className="text-sky-400 text-xs sm:text-sm font-medium mt-1 block hover:underline">
                        Read more →
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Dots Pagination */}
          <div className="flex justify-center space-x-2 mt-4">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  activeDot === index ? "bg-sky-400" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
