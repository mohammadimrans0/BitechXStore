'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Product } from '@/types';

const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  imageUrl: z.string().url('Image URL must be a valid URL'),
});

export type ProductFormData = z.infer<typeof productSchema>;

interface ProductFormProps {
  onSubmit: SubmitHandler<ProductFormData>;
  initialData?: Product;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, initialData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData ? { ...initialData, price: Number(initialData.price) } : {},
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input {...register('name')} id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-jungle-green focus:ring-deep-jungle-green sm:text-sm" />
        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea {...register('description')} id="description" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-jungle-green focus:ring-deep-jungle-green sm:text-sm"></textarea>
        {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>}
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input {...register('price')} id="price" type="number" step="0.01" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-jungle-green focus:ring-deep-jungle-green sm:text-sm" />
        {errors.price && <p className="mt-2 text-sm text-red-600">{errors.price.message}</p>}
      </div>
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
        <input {...register('imageUrl')} id="imageUrl" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-jungle-green focus:ring-deep-jungle-green sm:text-sm" />
        {errors.imageUrl && <p className="mt-2 text-sm text-red-600">{errors.imageUrl.message}</p>}
      </div>
      <button type="submit" className="bg-deep-jungle-green text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-colors">
        {initialData ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
