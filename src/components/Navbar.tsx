'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSearchProductsQuery } from '@/store/product/productApiSlice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/auth/authSlice';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: searchResults } = useSearchProductsQuery(searchTerm, { skip: !searchTerm });
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <nav className="bg-[#0D1821] text-white py-4 shadow-lg sticky top-0 z-50 border-b border-[#4E6E5D]/40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide hover:text-[#AD8A64] transition-colors"
        >
          BitechX <span className="text-[#AD8A64]">Store</span>
        </Link>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-lg border border-[#4E6E5D]/40 bg-[#4E6E5D]/20 text-white placeholder-white/60 focus:ring-2 focus:ring-[#AD8A64] focus:border-[#AD8A64] outline-none transition-all duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchResults && searchTerm && (
            <ul className="absolute top-full left-0 right-0 bg-white text-black border border-gray-200 rounded-md mt-1 shadow-lg max-h-64 overflow-y-auto z-50">
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      onClick={() => setSearchTerm('')}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No products found</li>
              )}
            </ul>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {token ? (
            <button
              onClick={() => dispatch(logout())}
              className="px-5 py-2 rounded-lg bg-[#A44A3F] text-white font-medium shadow-md hover:bg-[#8c3f36] hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="px-5 py-2 rounded-lg bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



// {0D1821, 4E6E5D, AD8A64, A44A3F}