import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, Category } from "@/types/product";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.escuelajs.co/api/v1/",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "products?limit=20",
        }),

        getProductById: builder.query<Product, string | number>({
            query: (id) => `products/${id}`,
        }),

        getProductsByCategory: builder.query<Product[], string | number>({
            query: (categoryId) => `products?categoryId=${categoryId}&limit=10`,
        }),

        getCategories: builder.query<Category[], void>({
            query: () => "categories",
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetProductsByCategoryQuery,
    useGetCategoriesQuery,
} = productsApi;
