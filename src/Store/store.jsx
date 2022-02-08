import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products/ProductSlice"
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    },
})