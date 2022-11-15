import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  products: [],
  carts: [],
};

// fetching produtcs
export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://fakestoreapi.com/products");
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    // add to cart
    AddToCart: (state, action) => {
      const cartItem = state.products.find((item) => {
        return item.id === action.payload;
      });
      state.carts = [...state.carts, cartItem];
    },

    // remove from cart
    RemoveFromCart: (state, action) => {
      const DeleteItems = state.carts.filter((item) => {
        return item.id !== action.payload;
      });
      state.carts = DeleteItems;
    },

  },

  extraReducers: {
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
  },
});

export const { AddToCart, RemoveFromCart } = cartSlice.actions;

export default cartSlice.reducer;