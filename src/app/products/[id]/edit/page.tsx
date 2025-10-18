'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ProductForm, { ProductFormData } from '@/components/ProductForm';
import { Product } from '@/types';

const EditProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await fetch(`/api/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        } else {
          router.push('/');
        }
      };
      fetchProduct();
    }
  }, [id, router]);

  const handleSubmit = async (data: ProductFormData) => {
    const res = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push(`/products/${id}`);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-platinum">
      <main className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-rich-black mb-6">Edit Product</h1>
          <ProductForm onSubmit={handleSubmit} initialData={product} />
        </div>
      </main>
    </div>
  );
};

export default EditProductPage;
