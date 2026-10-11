import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-gray-200 bg-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Tiles <span className="text-pink-600">Gallery</span>
              </h2>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
              Discover beautiful and premium tiles for every space.
              Explore modern designs, elegant patterns, and quality
              materials for your dream home.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700 transition hover:bg-pink-600 hover:text-white"
              >
                f
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700 transition hover:bg-pink-600 hover:text-white"
              >
                ig
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700 transition hover:bg-pink-600 hover:text-white"
              >
                GH
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700 transition hover:bg-pink-600 hover:text-white"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-pink-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/all-tiles"
                  className="transition hover:text-pink-600"
                >
                  All Tiles
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-pink-600"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-pink-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
              Tile Categories
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/all-tiles"
                  className="transition hover:text-pink-600"
                >
                  Ceramic Tiles
                </Link>
              </li>

              <li>
                <Link
                  href="/all-tiles"
                  className="transition hover:text-pink-600"
                >
                  Marble Tiles
                </Link>
              </li>

              <li>
                <Link
                  href="/all-tiles"
                  className="transition hover:text-pink-600"
                >
                  Porcelain Tiles
                </Link>
              </li>

              <li>
                <Link
                  href="/all-tiles"
                  className="transition hover:text-pink-600"
                >
                  Wooden Tiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm text-gray-600">

              <li>
                <span className="font-semibold text-gray-900">
                  📍 Address
                </span>
                <p className="mt-1">
                  Sylhet, Bangladesh
                </p>
              </li>

              <li>
                <span className="font-semibold text-gray-900">
                  📞 Phone
                </span>
                <p className="mt-1">
                  +880 1XXX-XXXXXX
                </p>
              </li>

              <li>
                <span className="font-semibold text-gray-900">
                  ✉️ Email
                </span>
                <p className="mt-1">
                  support@tilesgallery.com
                </p>
              </li>

            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-pink-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-pink-600"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;