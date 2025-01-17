import React from "react";
import { products } from "@/app/lib/products";
import ProductDetails from "@/components/ProductDetails";

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