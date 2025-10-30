import Link from "next/link";

export const Navbar = () => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-lg">
        Digital Ubiety
      </Link>
      <div className="space-x-6">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  </nav>
);
