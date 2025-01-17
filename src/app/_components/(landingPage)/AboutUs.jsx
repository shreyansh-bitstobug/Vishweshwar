import React from "react";
import { ArrowUpRight } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { label: "Daily Production", value: "100 KL" },
    { label: "Storage Capacity", value: "4,000 MT" },
    { label: "Years of Experience", value: "18+" },
    { label: "Operating Hours", value: "24/7" },
  ];

  return (
    <div className="w-full py-16 " id="about">
      <div className=" mx-auto ">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 bg-sky-100 text-sky-800 font-semibold rounded-full text-sm">
                  About Us
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-sky-900 leading-tight">
                  Delivering High-Quality Petroleum Products with{" "}
                  <span className="text-sky-600">Integrity and Innovation</span>
                </h1>
                <div className="h-1 w-20 bg-sky-500 rounded-full" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-4 bg-sky-50 rounded-lg">
                    <div className="font-bold text-2xl text-sky-700">
                      {stat.value}
                    </div>
                    <div className="text-sky-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="prose prose-lg text-gray-600">
                <p>
                  Since our establishment in 2005, we have been a trusted name
                  in the petroleum industry. Specializing in manufacturing,
                  importing, and reselling a diverse range of petroleum
                  products, we pride ourselves on delivering top-notch solutions
                  to meet our customers' needs.
                </p>

                <p>
                  Our founder, with extensive business experience across various
                  industries, personally oversaw the establishment of this
                  plant, ensuring that every aspect met his vision and
                  standards.
                </p>

                <p>
                  We proudly collaborate with major oil enterprises, including
                  both public sector undertakings (PSUs) and private firms such
                  as:
                </p>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    { name: "ONGC", url: "https://www.ongcindia.com" },
                    {
                      name: "Hindustan Petroleum",
                      url: "https://www.hindustanpetroleum.com",
                    },
                    {
                      name: "Bharat Petroleum",
                      url: "https://www.bharatpetroleum.com",
                    },
                    {
                      name: "Indian Oil Corporation",
                      url: "https://www.iocl.com",
                    },
                    {
                      name: "Vedanta",
                      url: "https://www.vedantaresources.com",
                    },
                    { name: "Reliance Industries", url: "https://www.ril.com" },
                    { name: "GAIL", url: "https://www.gailonline.com" },
                  ].map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sky-700 hover:underline"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      <span>{partner.name}</span>
                    </a>
                  ))}
                </div>

                <p className="mt-6">
                  Vishveshwar Oil and Lubricant Private Limited serves various
                  industries including paints, road construction, mining,
                  pharmaceuticals, cosmetics, and chemicals with our
                  comprehensive range of petroleum products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
