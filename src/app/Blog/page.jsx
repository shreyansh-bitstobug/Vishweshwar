import Image from "next/image";
import React from "react";
import BrentPrice from "../_components/(global)/BrentPrice";
import { blogs } from "../lib/blog";
import Link from "next/link";
import { ArrowRight, Badge, Clock, User } from "lucide-react";

export const metadata = {
  title: "Blogs - Premium Petroleum Products",
  description:
    "Vishweshar Oil is a leading supplier of premium petroleum products, offering high-quality engine oils, lubricants, and more. Trusted by industries worldwide.",
  keywords:
    "petroleum, engine oil, lubricants, Voils, automotive oil, industrial lubricants, motor oil, synthetic oil",
  openGraph: {
    title: "Voils - Premium Petroleum & Lubricants",
    description:
      "Discover high-quality petroleum products from Voils. Engine oils, lubricants, and industrial solutions trusted worldwide.",
    url: "https://voils.in",
    siteName: "Voils",
    type: "website",
    images: [
      {
        url: "/logo_1.png", // Add an actual image URL
        width: 1200,
        height: 630,
        alt: "Voils Petroleum Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@voils",
    title: "Blogs - Premium Petroleum Products",
    description:
      "Vishweshwar Oil is a trusted name in petroleum, offering high-quality lubricants, engine oils, and industrial solutions.",
    images: ["https://voils.in/logo_1.png"], // Add actual image URL
  },
};

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 sm:px-10 lg:px-20">
      <div className="text-center h-[70vh] flex flex-col justify-center items-center space-y-4">
        <div className="bg-white flex flex-col p-6 sm:p-10 lg:p-20 w-full h-[90%] rounded-2xl justify-center items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-center">
            Our Blogs & Articles
          </h1>
          <p className="w-full sm:w-3/4 lg:w-2/4 text-lg sm:text-xl pt-4 sm:pt-6 lg:pt-10">
            Our blog showcases a blend of visual appeal and practical design
            across diverse platforms.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 bg-white p-4 rounded-lg py-10">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="group rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <Link href={`/Blog/${blog.id}`}>
              <div className="relative h-48 sm:h-64 overflow-hidden">
                {blog.tags && (
                  <div className="flex gap-2 absolute top-4 left-4 z-10">
                    {blog.tags.split(",").map((tag, index) => (
                      <p
                        key={index}
                        className="glass-morph text-gray-200 text-sm font-light px-2 rounded-sm"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                )}
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={800}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
              </div>

              <div className="py-6 px-2 space-y-1">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {blog.readTime || "5 min read"}
                  </span>
                  <span className="flex items-center">
                    <User size={16} className="mr-1" />
                    {blog.author?.name || "By Admin"}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 line-clamp-1">{blog.description}</p>
                <p
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read more
                  <ArrowRight
                    size={16}
                    className="ml-1 transform group-hover:translate-x-1 transition-transform"
                  />
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
