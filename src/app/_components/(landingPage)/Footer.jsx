import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-10">
      <footer className="bg-gray-200 text-gray-800 rounded-t-2xl">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto py-10 flex flex-col sm:flex-row gap-8 justify-between px-6 sm:px-10">
          {/* Section 1: Branding and Tagline */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo_1.png"
                width={250}
                height={150}
                alt="Logo"
              />
            </div>
            <h2 className="text-lg sm:text-xl font-bold mb-2">
              Leading the Future of Petroleum Solutions
            </h2>
            <p className="text-sm">Vishveshwar Oil & Lubricants, 2025.</p>
          </div>

          {/* Section 2: Platform */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Custom Solutions</li>
              <li>Global Sourcing</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          {/* Section 3: Company and Resources */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-neonBlue text-gray-900 text-center py-3 text-xs sm:text-sm">
          <p>
            &copy; 2025 Vishveshwar Oil & Lubricants Pvt Ltd
            {/**
           * <span className="mx-2">|</span>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">
            Cookies
          </a>
           * 
           */}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
