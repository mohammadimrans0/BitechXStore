
import React from 'react';

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-pulse">
        {/* Product Image */}
        <div className="relative w-full h-[400px] bg-gray-200"></div>

        {/* Product Info */}
        <div className="p-8 flex flex-col gap-6">
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-24 bg-gray-200 rounded w-full"></div>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="h-12 bg-gray-200 rounded w-32"></div>
            <div className="h-12 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="space-y-8">
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
        <div className="h-24 bg-gray-200 rounded w-full"></div>
        <div className="h-24 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
