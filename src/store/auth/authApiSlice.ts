import { apiSlice } from '../api/apiSlice';
import { setToken } from './authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string }>({ 
      query: (credentials) => ({
        url: '/auth', 
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.token));
        } catch (error) {
          // Handle error
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
