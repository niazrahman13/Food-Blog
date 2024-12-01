import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-lg fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold">
            <Image
              src="/assets/lws-kitchen.png"
              alt="LWS Kitchen Logo"
              width={100}
              height={100}
              className="h-10"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Categories" className="hover:text-orange-500">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-orange-500">
                Latest Recipes
              </Link>
            </li>
          </ul>

          {/* Search Icon */}
          <div className="flex items-center space-x-4">
            <Link href="/search" className="hover:text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
