export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-10">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} NextJS Task Demo. Built with ❤️ using
        Tailwind CSS.
      </div>
    </footer>
  );
}
