'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { useGetProductsQuery } from '@/store/product/productApiSlice';
import { Product } from '@/types';
import ProductSkeleton from './ProductSkeleton';

interface DisplayProductProps {
  selectedCategory: string | null;
}

const DisplayProduct: React.FC<DisplayProductProps> = ({ selectedCategory }) => {
  const limit = 12; // products per page
  const [currentPage, setCurrentPage] = useState(1);

  const { data: products, isLoading, isError } = useGetProductsQuery({
    categoryId: selectedCategory || undefined,
  });

  const filteredProducts: Product[] =
    products?.filter((p) => p.name) ?? [];

  // total pages
  const totalPages = Math.ceil(filteredProducts.length / limit);

  // slice products for current page
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * limit;
    return filteredProducts.slice(start, start + limit);
  }, [filteredProducts, currentPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {Array.from({ length: limit }).map((_, idx) => (
          <ProductSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div className="text-center text-red-500">Error loading products</div>;
  }

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2 flex-wrap">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 disabled:bg-gray-400 transition"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`px-4 py-2 rounded-md transition ${
                  pageNum === currentPage
                    ? 'bg-[#4E6E5D] text-white shadow-lg'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 disabled:bg-gray-400 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayProduct;
