"use client";

import { useParams, useRouter } from "next/navigation";
import { useGetProductByIdQuery, useGetProductsByCategoryQuery } from "@/features/products/productsApi";
import { Loader } from "@/components/ui/Loader";
import { ErrorState } from "@/components/ui/ErrorState";
import { Button } from "@/components/ui/Button";
import ProductCard from "@/components/product/ProductCard";
import { useState } from "react";
import { Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";

const SIZES = ["6", "7", "8", "9", "10", "11", "12", "13"];
const COLORS = ["Black", "White", "Blue", "Red", "Gray"];

export default function ProductDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const dispatch = useDispatch();
    
    const { data: product, isLoading, error, refetch } = useGetProductByIdQuery(id as string);
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [addedToCart, setAddedToCart] = useState(false);

    // Fetch related products from same category
    const relatedQuery = useGetProductsByCategoryQuery(
        product?.category?.id || 0,
        { skip: !product?.category?.id }
    );

    if (isLoading) return <Loader />;
    if (error || !product) return <ErrorState message="Could not load product details. Please try again." onRetry={refetch} />;

    const images = product.images?.length > 0 
        ? product.images.map((img: string) => typeof img === 'string' ? img.replace(/[\[\]"]/g, '') : img)
        : ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000"];

    const handleQuantityChange = (type: "inc" | "dec") => {
        if (type === "dec" && quantity > 1) setQuantity(q => q - 1);
        if (type === "inc" && quantity < 10) setQuantity(q => q + 1);
    };

    const handleAddToCart = () => {
        dispatch(addToCart({
            product,
            quantity,
            size: selectedSize,
            color: selectedColor,
        }));
        
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    const handleBuyNow = () => {
        handleAddToCart();
        setTimeout(() => router.push("/cart"), 500);
    };

    // Filter out the current product from related products
    const relatedProducts = relatedQuery.data?.filter(p => p.id !== product.id).slice(0, 4) || [];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            {/* Product Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
                {/* Images Section */}
                <div className="flex flex-col gap-6">
                    <div className="bg-gray-50 rounded-4xl overflow-hidden aspect-square p-8 flex items-center justify-center border border-gray-100 shadow-sm relative group">
                        <img
                            src={images[mainImageIndex]}
                            alt={product.title}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {images.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {images.map((img: string, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setMainImageIndex(idx)}
                                    className={`relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${mainImageIndex === idx ? "border-primary shadow-md" : "border-gray-200 hover:border-gray-300"}`}
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

                    {/* Size Selector */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Select Size</h3>
                        <div className="grid grid-cols-4 gap-3">
                            {SIZES.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`py-3 px-2 rounded-xl font-semibold transition-all text-sm ${
                                        selectedSize === size
                                            ? "bg-primary text-white border-2 border-primary"
                                            : "bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-primary hover:bg-primary/10"
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color Selector */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Select Color</h3>
                        <div className="flex gap-4 flex-wrap">
                            {COLORS.map((color) => {
                                const colorMap: { [key: string]: string } = {
                                    "Black": "bg-black",
                                    "White": "bg-white border-2 border-gray-300",
                                    "Blue": "bg-blue-500",
                                    "Red": "bg-red-500",
                                    "Gray": "bg-gray-400",
                                };
                                return (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-12 h-12 rounded-full transition-all flex items-center justify-center ${colorMap[color]} ${
                                            selectedColor === color ? "ring-2 ring-offset-2 ring-primary" : "hover:ring-2 hover:ring-offset-2 hover:ring-gray-300"
                                        }`}
                                    >
                                        {selectedColor === color && (
                                            <Check className="w-6 h-6 text-white" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
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
                        <Button 
                            size="lg" 
                            onClick={handleAddToCart}
                            className={`w-full sm:w-2/3 h-14 gap-3 text-lg rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all ${
                                addedToCart ? "bg-green-500 hover:bg-green-500" : ""
                            }`}
                        >
                            {addedToCart ? (
                                <>
                                    <Check className="w-5 h-5" />
                                    Added!
                                </>
                            ) : (
                                <>
                                    <ShoppingCart className="w-5 h-5" />
                                    Add to Cart
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Buy Now Button */}
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={handleBuyNow}
                        className="w-full h-14 mt-4 text-lg rounded-2xl"
                    >
                        Buy Now
                    </Button>
                </div>
            </div>

            {/* You May Also Like Section */}
            {relatedProducts.length > 0 && (
                <div className="mt-24 pt-12 border-t border-gray-200">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 uppercase">
                        You May Also Like
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedProducts.map((relatedProduct: any, idx: number) => (
                            <ProductCard 
                                key={relatedProduct.id} 
                                product={relatedProduct} 
                                index={idx}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
