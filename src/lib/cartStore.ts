import { create } from "zustand";
import { Product } from "@/data/products";

type CartItem = Product & {
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
};

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
    items: state.items
      .map((item) =>
        item.id === id 
          ? { ...item, quantity: Math.max(1, quantity) } 
          : item
      )
      .filter((item) => item.quantity > 0),  // 自動移除 quantity <= 0 的商品
    })),
  getTotalPrice: () => {
    const subtotal = get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; // 日本消費稅 10%
    return Math.round(subtotal + tax);
  },
  getItemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
}));