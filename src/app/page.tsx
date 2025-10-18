'use client';

import { useState } from 'react';
import DisplayProduct from '@/components/DisplayProduct';
import DisplayCategory from '@/components/DisplayCategory';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-platinum">
      <main className="container mx-auto p-8">
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
