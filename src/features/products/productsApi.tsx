import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.escuelajs.co/api/v1/",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products",
        }),

        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),

        getCategories: builder.query({
            query: () => "categories",
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetCategoriesQuery,
} = productsApi;
