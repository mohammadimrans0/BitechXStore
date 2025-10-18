'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0D1821] text-white py-12 mt-10 border-t border-[#4E6E5D]/30">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4 text-[#AD8A64] tracking-wide">
            BitechX Store
          </h3>
          <p className="text-white/80 leading-relaxed">
            Your one-stop shop for the latest tech, gadgets, and innovation — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#AD8A64]">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-[#AD8A64] transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#AD8A64] transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#AD8A64] transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#AD8A64]">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-[#A44A3F] transition-colors duration-200"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-[#A44A3F] transition-colors duration-200"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-[#A44A3F] transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="mt-10 border-t border-[#4E6E5D]/40 pt-6 text-center text-white/70 text-sm">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-[#AD8A64] font-medium">BitechX Store</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
