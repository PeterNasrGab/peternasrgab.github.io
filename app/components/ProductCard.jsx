"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="border p-3 rounded-lg hover:shadow-md transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-2"
      />
      <h2 className="font-semibold text-sm line-clamp-2">
        {product.title}
      </h2>
      <p className="text-gray-600">${product.price}</p>
    </Link>
  );
}
