"use client";

import { useGetProductsQuery } from "@/features/products/productsApi";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
    const { data, isLoading, error } = useGetProductsQuery();

    if (!data?.length) return <p>No products found</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {data.slice(0, 4).map((product: any) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
