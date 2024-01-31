import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import cartReducer from "./features//cart/cartSlice";

const preloadedState = {};

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartReducer,
    },
    preloadedState,
    devTools: process.env.NODE_ENV === "production" ? false : true,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        }).concat(apiSlice.middleware);
    },
});
