import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductParams } from './types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
  endpoints: (builder) => ({
    getProductById: builder.query<ProductParams, string>({query: (id) => `/${id}`,},),
    getAllProducts: builder.query<ProductParams[], string>({query:() => ``,},)
  }),
});

// Ensure you're exporting the generated hooks
export const { useGetProductByIdQuery,useGetAllProductsQuery } = productApi;
