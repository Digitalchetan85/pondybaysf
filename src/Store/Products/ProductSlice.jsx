import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncMovies",
  async () => {
    const response = await axios.get("/products");
    return response.data.message;
  }
);

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
  extraReducers : {
      [fetchAsyncProducts.pending] : () => {
          // console.log("Pending");
      },
      [fetchAsyncProducts.fulfilled] : (state, { payload }) => {
          // console.log("Fetched Successfully.");
          return { ...state, products: payload };
      },
      [fetchAsyncProducts.rejected] : () => {
          // console.log("Rejected");
      },
  }
});

export const { addProducts, singleProduct } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;
export default productSlice.reducer;
