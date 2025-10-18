"use client";

import Image from "next/image";
import { Product } from "@/types";
import defaultProductImage from "@/../public/images/default-product.jpeg";

interface ProductDetailsProps {
  product: Product;
  onDelete: (id: string) => void;
}

const demoReviews = [
  {
    id: 1,
    name: "Alice",
    rating: 5,
    comment: "Excellent product! Highly recommend.",
  },
  { id: 2, name: "Bob", rating: 4, comment: "Good quality, but a bit pricey." },
  {
    id: 3,
    name: "Charlie",
    rating: 5,
    comment: "Exactly as described. Will buy again.",
  },
];

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  onDelete,
}) => {
  const productImage = (product.images && product.images.length > 0 && product.images[0]) || defaultProductImage;
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Product Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={productImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="p-8 flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {product.name}
          </h1>
          <p className="text-3xl font-semibold text-gray-700">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => onDelete(product.id)}
              className="px-6 py-3 rounded-xl bg-[#4E6E5D] text-white font-semibold shadow-lg hover:bg-[#AD8A64] transition-colors duration-200"
            >
              Wishlist
            </button>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
        {demoReviews.map((review, idx) => (
          <div
            key={review.id}
            className={`p-6 rounded-2xl shadow-md ${idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-800">{review.name}</span>
              <span className="text-yellow-400 font-medium">
                {"★".repeat(review.rating)}
              </span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}

        {/* Comment Form */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Leave a Review
          </h3>
          <textarea
            placeholder="Write your comment..."
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200 resize-none"
            rows={4}
          />
          <button className="mt-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
