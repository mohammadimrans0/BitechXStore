'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formattedDate = product.createdAt
    ? new Date(product.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  // ✅ Safe image src
  const imageSrc =
    product.images && product.images.length > 0 && product.images[0]
      ? product.images[0].startsWith('http')
        ? product.images[0] // remote URL
        : `/images/${product.images[0]}` // local fallback
      : '/images/default-product.jpeg'; // default fallback

  return (
    <div className="bg-[#0D1821] rounded-2xl shadow-lg overflow-hidden border border-[#4E6E5D]/40 hover:shadow-[#AD8A64]/40 hover:-translate-y-2 transform transition-all duration-300">
      {/* Product Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={product.name || 'Product Image'}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1821]/80 via-transparent to-transparent" />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#AD8A64] truncate">
          {product.name}
        </h3>
        <p className="text-[#D1D1D1] text-sm mt-2 line-clamp-2">
          {product.description || 'No description available'}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[#4E6E5D] font-bold text-lg">
            ${product.price?.toFixed(2) ?? '0.00'}
          </span>
          {formattedDate && (
            <span className="text-xs text-[#A44A3F]/80">{formattedDate}</span>
          )}
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="mt-5 block text-center bg-gradient-to-r from-[#4E6E5D] to-[#AD8A64] text-white font-medium px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-[#AD8A64]/30"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
