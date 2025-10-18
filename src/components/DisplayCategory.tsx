'use client';

import React from 'react';
import Image from 'next/image';
import { useGetCategoriesQuery } from '@/store/category/categoryApiSlice';
import { Category } from '@/types';
import CategorySkeleton from './CategorySkeleton';

interface DisplayCategoryProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const DisplayCategory: React.FC<DisplayCategoryProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery({});

  if (isLoading) {
    return (
      <div className="w-full my-10">
        <h2 className="text-2xl font-semibold text-[#0D1821] mb-6 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <CategorySkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-10">
        Please login to see categories
      </div>
    );
  }

  return (
    <div className="w-full my-10">
      <h2 className="text-2xl font-semibold text-[#0D1821] mb-6 text-center">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {/* “All Categories” Button */}
        <div
          onClick={() => setSelectedCategory(null)}
          className={`relative cursor-pointer group rounded-full w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-gradient-to-br from-[#4E6E5D] to-[#AD8A64] shadow-md hover:scale-105 transition-transform ${
            !selectedCategory
              ? 'ring-4 ring-[#AD8A64]/70'
              : 'hover:ring-2 hover:ring-[#AD8A64]/50'
          }`}
        >
          <span className="text-white font-semibold text-sm sm:text-base">
            All
          </span>
        </div>

        {/* Category Cards */}
        {categories?.map((category: Category) => (
          <div
            key={category.id}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category.id ? null : category.id
              )
            }
            className={`relative cursor-pointer group rounded-full w-28 h-28 sm:w-32 sm:h-32 overflow-hidden border-3 transition-all duration-300 border-[#AD8A64] ${
              selectedCategory === category.id
                ? 'ring-4 ring-[#AD8A64]/70 scale-105'
                : 'hover:ring-2 hover:ring-[#AD8A64]/40'
            }`}
          >
            <Image
              src={category.image || '/images/default-product.jpeg'}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

            {/* Category Name */}
            <span className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm sm:text-base px-2 text-center">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayCategory;
