import { apiSlice } from '../api/apiSlice';
import { Category } from '@/types';

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], { offset?: number; limit?: number }>({
      query: ({ offset, limit }) => {
        const params = new URLSearchParams();
        if (offset) params.append('offset', String(offset));
        if (limit) params.append('limit', String(limit));
        return `/categories?${params.toString()}`;
      },
    }),
    searchCategories: builder.query<Category[], string>({
      query: (searchedText) => `/categories/search?searchedText=${searchedText}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useSearchCategoriesQuery } = categoryApi;
