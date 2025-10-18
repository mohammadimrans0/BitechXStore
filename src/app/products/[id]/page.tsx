'use client';

import { useParams, useRouter } from 'next/navigation';
import ProductDetails from '@/components/ProductDetails';
import { useGetProductBySlugQuery, useDeleteProductMutation } from '@/store/product/productApiSlice';
import ProductDetailsSkeleton from '@/components/ProductDetailsSkeleton';

const ProductPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data: product, isLoading, isError } = useGetProductBySlugQuery(id as string);
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id).unwrap();
        router.push('/');
      } catch (error) {
        console.error('Failed to delete product', error);
      }
    }
  };

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (isError || !product) {
    return <div>Error fetching product</div>;
  }

  return (
    <div className="min-h-screen bg-platinum">
      <ProductDetails product={product} onDelete={handleDelete} />
    </div>
  );
};

export default ProductPage;
