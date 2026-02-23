"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemsCount = cartItems.length;

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] rounded-lg">
        <div className="flex justify-between items-center h-20">


          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <Link href="/new-drops" className="text-gray-600 hover:text-primary transition-colors">
              New Drops 🔥
            </Link>
            <Link href="/men" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1">
              Men <IoMdArrowDropdown />
            </Link>
            <Link href="/women" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1">
              Women <IoMdArrowDropdown />
            </Link>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img src="/Logo.png" alt="logo" className=" w-32 h-8" />
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-primary transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-primary transition-colors" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <Link href="/cart">
              <button className="text-gray-600 hover:text-primary transition-colors relative" aria-label="Cart">
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full left-0 z-40">
          <Link href="/new-drops" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50">
            New Drops 🔥
          </Link>
          <Link href="/men" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50">
            Men <IoMdArrowDropdown />
          </Link>
          <Link href="/women" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50">
            Women <IoMdArrowDropdown />
          </Link>
          <div className="flex border-t border-gray-100 pt-4 mt-2 gap-4 px-3">
            <button className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full bg-gray-50">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full bg-gray-50">
              <User className="w-5 h-5" />
            </button>
            <Link href="/cart">
              <button className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full bg-gray-50 relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
