"use client";

import { useParams } from "next/navigation";
import { useGetProductByIdQuery } from "@/features/products/productsApi";
import { Loader } from "@/components/ui/Loader";
import { ErrorState } from "@/components/ui/ErrorState";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const { data: product, isLoading, error, refetch } = useGetProductByIdQuery(id);
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Quick handle of string ids in Next15/16 useParams
    const productId = Array.isArray(id) ? id[0] : id;

    if (isLoading) return <Loader />;
    if (error || !product) return <ErrorState message="Could not load product details. Please try again." onRetry={refetch} />;

    const images = product.images.map((img: string) => img.replace(/[\[\]"]/g, ''));
    const safeImages = images.length > 0 ? images : ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000"];

    const handleQuantityChange = (type: "inc" | "dec") => {
        if (type === "dec" && quantity > 1) setQuantity(q => q - 1);
        if (type === "inc" && quantity < 10) setQuantity(q => q + 1);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {/* Images Section */}
                <div className="flex flex-col gap-6">
                    <div className="bg-gray-50 rounded-[32px] overflow-hidden aspect-square p-8 flex items-center justify-center border border-gray-100 shadow-sm relative group">
                        <img
                            src={safeImages[mainImageIndex]}
                            alt={product.title}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {safeImages.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {safeImages.map((img: string, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setMainImageIndex(idx)}
                                    className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${mainImageIndex === idx ? "border-primary shadow-md" : "border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx}`} />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Info Section */}
                <div className="flex flex-col">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                        {product.category?.name || "Sneakers"}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                        {product.title}
                    </h1>

                    <div className="text-3xl font-black text-gray-900 mb-8">
                        ${product.price}
                    </div>

                    <div className="border-t border-b border-gray-100 py-8 mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Description</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {product.description}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 mt-auto">
                        {/* Quantity Selector */}
                        <div className="flex items-center justify-between border-2 border-gray-200 rounded-2xl p-2 w-full sm:w-1/3 h-14">
                            <button
                                onClick={() => handleQuantityChange("dec")}
                                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange("inc")}
                                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Add to Cart */}
                        <Button size="lg" className="w-full sm:w-2/3 h-14 gap-3 text-lg rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
