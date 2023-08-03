import { create } from "zustand";
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'


type CartState = {
    products: Product[];
    basket: Product[];
    total: number;
    addToBasket: (product: Product) => void;
    clearBasket: () => void;
    deleteFromBasket: (product: Product) => void;
};

export const useCartStore = create<CartState>()(persist(immer((set) => ({
    products: [
        {
            id: 1,
            name: 'Barsky Hara Doctor BHD-01',
            image: 'Barsky chear.webp',
            price: 352.20,
            inBasket: false,
        },
        {
            id: 2,
            name: 'Hator Hypergang PC Edition Black',
            image: 'Hator Hypergang PC Edition Black.webp',
            price: 38.52,
            inBasket: false,
        },
        {
            id: 3,
            name: 'Logitech G102 Lightsync USB Black',
            image: 'Logitech G102 Lightsync USB Black.webp',
            price: 15.5,
            inBasket: false,
        },
        {
            id: 4,
            name: 'HyperX Alloy Core RGB Membrane Gaming USB',
            image: 'HyperX Alloy Core RGB Membrane Gaming USB.webp',
            price: 52,
            inBasket: false,
        },
    ],
    basket:[],
    total: 0,

    addToBasket: (product) => set((state) => {
        const updatedProducts = state.products.map((item) =>
            item.id === product.id ? { ...item, inBasket: true } : item
        );
        state.products = updatedProducts;
        state.basket = [...state.basket, product];
        state.total += product.price;
    }),
    clearBasket: () => set((state) => {
        state.basket = []; 
        state.total = 0;
        const updatedProducts = state.products.map((item) => ({ ...item, inBasket: false }));
        state.products = updatedProducts;
    }),
    deleteFromBasket: (product) => set((state) => {
        state.total -= product.price;
        const updatedProducts = state.products.map((item) =>
            item.id === product.id ? { ...item, inBasket: false } : item
        );
        state.products = updatedProducts;
        state.basket = state.basket.filter((item) => item.id !== product.id);
    }),
})),
    {
        name: 'store', 
    }
))
