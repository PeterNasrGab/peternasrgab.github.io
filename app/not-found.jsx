export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-gray-600 text-lg">Oops! Page not found.</p>
      <a
        href="/"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
}
