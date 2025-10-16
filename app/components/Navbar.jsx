import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          NextJS Task
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
           <Link href="/users" className="hover:text-blue-600">
            Users
          </Link>
        </div>
      </div>
    </nav>
  );
}
