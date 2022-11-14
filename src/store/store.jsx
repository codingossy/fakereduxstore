import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";



const store = configureStore({
    reducer: {
        products: cartSlice,
    },
})

export default store