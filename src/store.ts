import { create } from "zustand";
import { immer } from 'zustand/middleware/immer'


type CartState = {
    products: Product[];
    basket: Product[];
    total: number;
    addToBasket: (product: Product) => void;
    clearBasket: () => void;
    createStore: () => void;
    // deleteFromBasket: (product: Product) => void;
};

export const useCartStore = create<CartState>()(immer((set) => ({
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
        item.id === product.id ? { ...item, inBasket: !item.inBasket } : item
        );
        state.products = updatedProducts;
        state.basket = [...state.basket, product];
        state.total += product.price;
        localStorage.setItem('Products', JSON.stringify(state.products));
        localStorage.setItem('Basket', JSON.stringify(state.basket));
    }),

    clearBasket: () => set((state) => {
        state.basket = []; 
        state.total = 0;
        const updatedProducts = state.products.map((item) => ({ ...item, inBasket: false }));
        state.products = updatedProducts;
        localStorage.setItem('Products', JSON.stringify(state.products));
        localStorage.setItem('Basket', JSON.stringify(state.basket));
    }),

    createStore: () =>set((state) => {
        const dataBasket = localStorage.getItem(`Basket`)
        const dataProducts = localStorage.getItem(`Products`)
        if (dataBasket !== null && dataProducts !== null) {
            state.basket = JSON.parse(dataBasket);
            state.products = JSON.parse(dataProducts)
            state.total = state.basket.reduce((total, product) => total + product.price, 0);
        }
    }),

    // deleteFromBasket: (product) => set((state) => {
    //     const updatedProducts = state.products.map((item) =>
    //     item.id === product.id ? { ...item, inBasket: !item.inBasket } : item
    //     );
    //     state.products = updatedProducts;
    //     state.basket = state.basket.filter((item) => item.id !== product.id);
    //     state.total -= product.price;
    //     localStorage.setItem('Products', JSON.stringify(state.products));
    //     localStorage.setItem('Basket', JSON.stringify(state.basket));
    // }),


})));