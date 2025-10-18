
import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 w-full">
      <div className="bg-gray-200 h-48 w-full rounded-md animate-pulse"></div>
      <div className="mt-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mt-2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
