"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart, updateQuantity, clearCart } from "@/features/cart/cartSlice";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const subtotal = cartItems.reduce(
        (sum: number, item: any) => sum + item.product.price * item.quantity,
        0
    );
    const deliveryFee = subtotal > 0 ? 10 : 0;
    const tax = subtotal * 0.1;
    const total = subtotal + deliveryFee + tax;

    const handleQuantityChange = (id: number, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
    };

    if (cartItems.length === 0) {
        return <EmptyState />;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 uppercase">
                Your Cart
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <div className="space-y-4">
                        {cartItems.map((item: any) => (
                            <div
                                key={item.id}
                                className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 flex gap-4 md:gap-6"
                            >
                                {/* Product Image */}
                                <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-xl overflow-hidden">
                                    <img
                                        src={
                                            typeof item.product.images?.[0] === 'string'
                                                ? item.product.images[0].replace(/[\[\]"]/g, '')
                                                : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000'
                                        }
                                        alt={item.product.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                                            {item.product.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-2">
                                            {item.product.category?.name || "Sneakers"}
                                        </p>
                                        <div className="flex gap-4 text-sm">
                                            {item.size && (
                                                <div>
                                                    <span className="text-gray-500">Size: </span>
                                                    <span className="font-semibold text-gray-900">{item.size}</span>
                                                </div>
                                            )}
                                            {item.color && (
                                                <div>
                                                    <span className="text-gray-500">Color: </span>
                                                    <span className="font-semibold text-gray-900">{item.color}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="text-xl font-black text-gray-900">
                                            ${(item.product.price * item.quantity).toFixed(2)}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center border border-gray-200 rounded-lg">
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                    className="p-1.5 hover:bg-gray-100 transition-colors"
                                                >
                                                    <Minus className="w-4 h-4 text-gray-600" />
                                                </button>
                                                <span className="px-3 py-1 font-semibold text-gray-900 min-w-10 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                    className="p-1.5 hover:bg-gray-100 transition-colors"
                                                >
                                                    <Plus className="w-4 h-4 text-gray-600" />
                                                </button>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => handleRemove(item.id)}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Continue Shopping Link */}
                    <Link href="/" className="inline-block mt-6">
                        <Button variant="outline" size="lg" className="rounded-2xl">
                            Continue Shopping
                        </Button>
                    </Link>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-32">
                        <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase">
                            Order Summary
                        </h2>

                        <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-semibold">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Delivery Fee</span>
                                <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax (10%)</span>
                                <span className="font-semibold">${tax.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-bold text-gray-900">Total</span>
                            <span className="text-3xl font-black text-primary">
                                ${total.toFixed(2)}
                            </span>
                        </div>

                        <Button size="lg" className="w-full h-14 rounded-2xl mb-3 shadow-[0_0_20px_rgba(37,99,235,0.3)] text-lg">
                            Proceed to Checkout
                        </Button>

                        <Button
                            variant="ghost"
                            size="lg"
                            onClick={() => dispatch(clearCart())}
                            className="w-full h-12 text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                            Clear Cart
                        </Button>

                        {/* Promo Code */}
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Promo code"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                />
                                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}