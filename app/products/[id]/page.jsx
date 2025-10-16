import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 }, 
  });

  if (!res.ok) {
    return notFound();
  }

  const product = await res.json();

  if (!product || Object.keys(product).length === 0) {
    return notFound();
  }

  return (
    <main className="p-6">
      <div className="max-w-3xl mx-auto border p-4 rounded-lg shadow-sm">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain mx-auto"
        />
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-600 mt-2">{product.category}</p>
        <p className="text-xl font-semibold mt-2">${product.price}</p>
        <p className="mt-4 text-gray-700">{product.description}</p>
      </div>
    </main>
  );
}
