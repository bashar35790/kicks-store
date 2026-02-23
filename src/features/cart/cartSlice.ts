import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "@/types/product";

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: CartState,
      action: PayloadAction<{
        product: Product;
        quantity: number;
        size?: string;
        color?: string;
      }>
    ) => {
      const { product, quantity, size, color } = action.payload;
      
      // Check if item already exists in cart
      const existingItem = state.items.find(
        (item: CartItem) =>
          item.product.id === product.id && 
          item.size === size && 
          item.color === color
      );

      if (existingItem) {
        // Update quantity if item exists
        existingItem.quantity += quantity;
      } else {
        // Add new item to cart
        state.items.push({
          id: Date.now(), // Simple unique ID
          product,
          quantity,
          size,
          color,
        });
      }
    },

    removeFromCart: (state: CartState, action: PayloadAction<number>) => {
      state.items = state.items.filter((item: CartItem) => item.id !== action.payload);
    },

    updateQuantity: (
      state: CartState,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item: CartItem) => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
    },

    clearCart: (state: CartState) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
