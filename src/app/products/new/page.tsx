'use client';

import { useRouter } from 'next/navigation';
import ProductForm, { ProductFormData } from '@/components/ProductForm';

const NewProductPage = () => {
  const router = useRouter();

  const handleSubmit = async (data: ProductFormData) => {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-platinum">
      <main className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-rich-black mb-6">Add New Product</h1>
          <ProductForm onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
};

export default NewProductPage;
