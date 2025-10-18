'use client';

import { useState } from 'react';
import DisplayProduct from '@/components/DisplayProduct';
import DisplayCategory from '@/components/DisplayCategory';
import Banner from '@/components/Banner';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-platinum">
      <main className="container mx-auto p-8">
        <Banner />
        
        <DisplayCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <DisplayProduct selectedCategory={selectedCategory} />
      </main>
    </div>
  );
};

export default Home;
