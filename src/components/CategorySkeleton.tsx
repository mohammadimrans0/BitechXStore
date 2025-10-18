
import React from 'react';

const CategorySkeleton = () => {
  return (
    <div className="relative cursor-pointer group rounded-full w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-gray-200 animate-pulse">
      <div className="h-6 w-16 bg-gray-300 rounded-md animate-pulse"></div>
    </div>
  );
};

export default CategorySkeleton;
