"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login"; // hide Navbar/Footer on login page

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {!hideLayout && <Navbar />}
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
