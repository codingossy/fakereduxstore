import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";

const store = configureStore({
  reducer: {
    items: cartReducer,
  },
});

export default store;
