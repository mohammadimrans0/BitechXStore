import { apiSlice } from '../api/apiSlice';
import { Product } from '@/types';

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { offset?: number; limit?: number; categoryId?: string }>({ 
      query: ({ offset, limit, categoryId }) => {
        const params = new URLSearchParams();
        if (offset) params.append('offset', String(offset));
        if (limit) params.append('limit', String(limit));
        if (categoryId) params.append('categoryId', categoryId);
        return `/products?${params.toString()}`;
      },
    }),
    getProductBySlug: builder.query<Product, string>({
      query: (slug) => `/products/${slug}`,
    }),
    searchProducts: builder.query<Product[], string>({
      query: (searchedText) => `/products/search?searchedText=${searchedText}`,
    }),
    createProduct: builder.mutation<Product, Partial<Product>>({
      query: (body) => ({
        url: '/products',
        method: 'POST',
        body,
      }),
    }),
    updateProduct: builder.mutation<Product, { id: string; body: Partial<Product> }>({ 
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteProduct: builder.mutation<Product, string>({ 
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductBySlugQuery,
  useSearchProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;