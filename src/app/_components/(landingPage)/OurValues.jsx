import React from "react";

const OurValues = () => {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center h-[400px] sm:h-[500px] flex items-center justify-center rounded-2xl overflow-hidden"
      style={{
        backgroundImage: "url('/image/values.jpg')",
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center bottom", // Adjust positioning
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 sm:px-6 md:px-8 lg:px-10 max-w-2xl sm:max-w-3xl">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Empowering Industries with Innovative Fuel Solutions
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg mb-6">
          We prioritize sustainability and efficiency, delivering high-quality
          fuels and lubricants tailored to your business needs.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neonBlue hover:bg-sky-400 text-gray-800 py-2 px-4 sm:py-3 sm:px-6 rounded-md text-sm sm:text-lg font-medium transition duration-300"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
};

export default OurValues;
