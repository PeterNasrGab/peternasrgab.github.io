"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login"); 
    }
  }, [router]);

  return (
    <section className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the Next.js Demo 🚀</h1>
      <p className="text-gray-600">
        This simple app shows how Next.js handles routing, components, and API
        fetching with Tailwind CSS.
      </p>
      <a
        href="/products"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Products
      </a>

      <a
        href="/users"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Users
      </a>
    </section>
  );
}
