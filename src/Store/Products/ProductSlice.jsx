import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncMovies",
  async () => {
    const response = await axios.get("/products");
    return response.data.result;
  }
);

export const fetchAsyncUsers = createAsyncThunk(
    "products/fetchUsers",
    async () => {
      const response = await axios.get("/login");
      console.log(response)
      return response.data;
    }
  );

const initialState = {
  products: [],
  login: {},
  add_Item: []
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
      [fetchAsyncUsers.fulfilled] : (state, { payload }) => {
          // console.log("Fetched Successfully.");
          return { ...state, login: payload };
      },
  }
});

export const { addProducts } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;
export default productSlice.reducer;
