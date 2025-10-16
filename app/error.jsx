"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-2">
          Something went wrong globally 💥
        </h2>
        <p className="text-gray-600 mb-4">{error?.message}</p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Reload
        </button>
      </body>
    </html>
  );
}
