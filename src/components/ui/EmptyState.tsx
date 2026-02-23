import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

export const EmptyState = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-100 text-gray-400 p-8 rounded-full mb-6">
          <ShoppingCart className="w-16 h-16" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Your Cart is Empty
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md">
          Looks like you haven't added anything to your cart yet. Start shopping and find your perfect pair!
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Start Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};
