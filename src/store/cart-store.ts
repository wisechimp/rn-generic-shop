import { create } from "zustand";
import { PRODUCTS } from "../data/products";

type CartItemType = {
  id: number;
  title: string;
  image: any;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (id: number) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  getTotalPrice: () => string;
  getItemCount: () => number;
};

const initialCartItems: CartItemType[] = [];

export const useCartStore = create<CartState>((set, get) => ({
  items: initialCartItems,
  addItem: (item: CartItemType) => {
    const existingItems = get().items.find(
      (existingItem) => existingItem.id === item.id
    );
    if (existingItems) {
      set((state) => ({
        items: state.items.map((existingItem) =>
          existingItem.id === item.id
            ? {
                ...existingItem,
                quantity: Math.min(
                  existingItem.quantity + item.quantity,
                  PRODUCTS.find((product) => product.id === item.id)
                    ?.maxQuantity || existingItem.quantity
                ),
              }
            : existingItem
        ),
      }));
    } else {
      set((state) => ({ items: [...state.items, item] }));
    }
  },
  removeItem: (id: number) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  incrementItem: (id: number) =>
    set((state) => {
      const product = PRODUCTS.find((product) => product.id === id);
      if (!product) return state;
      return {
        items: state.items.map((existingItem) =>
          existingItem.id === id && existingItem.quantity < product.maxQuantity
            ? { ...existingItem, quantity: existingItem.quantity + 1 }
            : existingItem
        ),
      };
    }),
  decrementItem: (id: number) =>
    set((state) => ({
      items: state.items.map((existingItem) =>
        existingItem.id === id && existingItem.quantity > 1
          ? { ...existingItem, quantity: existingItem.quantity - 1 }
          : existingItem
      ),
    })),
  getTotalPrice: () => {
    const { items } = get();
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  },
  getItemCount: () => {
    const { items } = get();
    return items.reduce((count, item) => count + item.quantity, 0);
  },
}));
