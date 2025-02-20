import React from "react";
import { products } from "@/app/lib/products";
import ProductDetails from "@/components/ProductDetails";

export const metadata = {
  title: "Products - Premium Petroleum Products",
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
    title: "Products - Premium Petroleum Products",
    description:
      "Vishweshwar Oil is a trusted name in petroleum, offering high-quality lubricants, engine oils, and industrial solutions.",
    images: ["https://voils.in/logo_1.png"], // Add actual image URL
  },
};

const ProductPage = ({ params }) => {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-96 bg-white shadow-md rounded-lg p-6">
          <p className="text-center text-gray-500">Product not found.</p>
        </div>
      </div>
    );
  }

  return <ProductDetails product={product} />;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default ProductPage;