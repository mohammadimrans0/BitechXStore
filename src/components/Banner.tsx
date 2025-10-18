'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner: React.FC = () => {
  // Hardcoded banners
  const banners = [
    {
      id: '1',
      title: 'New Arrivals',
      subtitle: 'Shop the latest collection',
      image: '/images/banner/banner-1.jpg',
      link: '/category/new',
    },
    {
      id: '2',
      title: 'Flash Sale',
      subtitle: 'Up to 50% off',
      image: '/images/banner/banner-2.jpg',
      link: '/category/sale',
    },
    {
      id: '3',
      title: 'Trending Now',
      subtitle: 'Most popular items',
      image: '/images/banner/banner-3.jpg',
      link: '/category/trending',
    },
    {
      id: '4',
      title: 'Best Sellers',
      subtitle: 'Customer favorites',
      image: '/images/banner/banner-4.jpg',
      link: '/category/bestsellers',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentIndex];

  return (
    <div className="container mx-auto px-2 grid gap-6">
      <div className="grid grid-cols-12 gap-1">
        {/* Left carousel section */}
        <div className="relative col-span-8 row-span-1 rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl">
          <Link href={currentBanner?.link || ''}>
            <Image
              src={currentBanner?.image || ''}
              alt={currentBanner?.title || ''}
              width={700}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-start p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {currentBanner?.title || ''}
              </h2>
              <p className="text-white/90 mt-2">{currentBanner?.subtitle || ''}</p>
            </div>
          </Link>
        </div>

        {/* Right static banner */}
        <div className="relative col-span-4 row-span-1 rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl">
          <Image
            src="/images/banner/discount.webp"
            alt="Amazing deals image"
            width={500}
            height={400}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-start p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Amazing Deals
            </h2>
            <p className="text-white/90 mt-2">Hot offer available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
