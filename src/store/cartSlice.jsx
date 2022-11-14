import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: '',
  products: [],
  carts: [],
};

// fetching produtcs
export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://api.escuelajs.co/api/v1/products");
    return res.data;
  }
);

const cartSlice = createSlice({
  name: "products/allproducts",
  initialState,
  reducers: {},


  extraReducer: {
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});

// export const {} = cartSlice.actions;

export default cartSlice.reducer;
