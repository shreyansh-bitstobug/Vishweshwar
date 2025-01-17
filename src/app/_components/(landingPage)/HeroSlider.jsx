"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Building2, Shield, Truck, Users } from "lucide-react";

const slides = [
  {
    src: "/image/homeSlider/img1.jpg",
    title: "Excellence in Petroleum",
    subheading:
      "Leading the industry with integrity, innovation, and sustainable solutions since 2005.",
    showLogo: true,
    highlights: [
      {
        icon: Building2,
        title: "18+ Years",
        desc: "Of Industry Excellence",
      },
      {
        icon: Shield,
        title: "Quality Assured",
        desc: "ISO Certified Products",
      },
      {
        icon: Truck,
        title: "Pan India",
        desc: "Distribution Network",
      },
      {
        icon: Users,
        title: "1000+",
        desc: "Satisfied Clients",
      },
    ],
  },
  {
    src: "/image/homeSlider/img2.jpg",
    title: "Our Expertise",
    subheading:
      "With 18+ years of experience, we provide comprehensive petroleum solutions backed by cutting-edge technology and industry expertise.",
    features: [
      "Quality Assurance",
      "Sustainable Practices",
      "24/7 Support",
      "Nationwide Delivery",
    ],
    showLogo: false,
  },
  {
    src: "/image/homeSlider/img3.jpg",
    title: "Premium Products",
    subheading:
      "Comprehensive range of high-quality petroleum products for diverse industrial needs:",
    products: [
      {
        name: "LDO (Light Diesel Oil)",
        desc: "High-efficiency fuel for industrial applications",
      },
      {
        name: "Furnace Oil",
        desc: "Premium heating solution for industrial boilers",
      },
      {
        name: "MTO (Motor Turbine Oil)",
        desc: "Advanced lubricant for turbine engines",
      },
      {
        name: "C9 Solvent",
        desc: "Versatile aromatic solvent for multiple applications",
      },
    ],
    showLogo: false,
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 100);
    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[100dvh] bg-black overflow-hidden flex flex-col">
      {/* Main content area */}
      <div className="relative flex-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Background image */}
            <img
              src={slides[currentIndex].src}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />

            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end pb-10">
              <div className="px-4 sm:px-6 lg:px-8">
                <motion.div
                  className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {/* Logo Section */}
                  {slides[currentIndex].showLogo && (
                    <div className="mb-8 flex justify-center overflow-hidden">
                      <motion.div
                        className="relative"
                        initial={{ scale: 0, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                          delay: 0.3,
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-sky-500/ blur-xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />

                        <div className="relative group">
                          <motion.p
                            className="text-gray-900 z-40  backdrop-blur-sm rounded-2xl py-6 px-2 lg:px-8 font-extrabold text-xl lg:text-4xl text-center shadow-xl "
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.2 },
                            }}
                          >
                            <motion.span
                              initial={{ backgroundPosition: "0% 50%" }}
                              whileHover={{
                                backgroundPosition: "100% 50%",
                                transition: { duration: 0.8 },
                              }}
                              className=" text-gray-100 bg-clip-text  bg-[length:200%]"
                            >
                              Vishveshwar Oils & Lubricants Pvt. Ltd.
                            </motion.span>
                          </motion.p>

                          <motion.div
                            className="absolute -inset-1  text-gray-100 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            animate={{
                              scale: [1, 1.02, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* Title and Subheading */}
                  <motion.h2
                    className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-3 text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {slides[currentIndex].title}
                  </motion.h2>
                  <motion.p
                    className="text-sm sm:text-base text-gray-200 mb-6 max-w-3xl text-center mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {slides[currentIndex].subheading}
                  </motion.p>

                  {/* Highlights Grid */}
                  {slides[currentIndex].highlights && (
                    <motion.div
                      className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {slides[currentIndex].highlights.map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.6 + index * 0.1,
                            duration: 0.3,
                          }}
                        >
                          <item.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 mx-auto text-blue-400" />
                          <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-300">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* Features Grid */}
                  {slides[currentIndex].features && (
                    <motion.div
                      className="grid grid-cols-2 gap-3 sm:gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {slides[currentIndex].features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-white text-sm sm:text-base"
                        >
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* Products Grid */}
                  {slides[currentIndex].products && (
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {slides[currentIndex].products.map((product, index) => (
                        <div
                          key={index}
                          className="bg-white/10 rounded-lg p-3 sm:p-4"
                        >
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                            {product.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-200">
                            {product.desc}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="relative w-full bg-black/10">
        <div className="w-full max-w-[30rem] mx-auto px-4 py-3">
          <div className="flex flex-row justify-evenly space-x-2 sm:space-x-4">
            {slides.map((_, index) => (
              <div key={index} className="flex-1 min-w-0 max-w-full">
                <div className="relative w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-500"
                    style={{
                      width: currentIndex === index ? `${progress}%` : "0%",
                    }}
                    initial={{ width: "0%" }}
                    animate={{
                      width: currentIndex === index ? `${progress}%` : "0%",
                    }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-y-0 left-0 right-0 pointer-events-none">
        <div className="h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={prevSlide}
            className="pointer-events-auto p-2 rounded-full bg-transparent lg:bg-black/30 hover:bg-black/50 transition-colors text-white backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto p-2 rounded-full bg-transparent lg:bg-black/30 hover:bg-black/50 transition-colors text-white backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
