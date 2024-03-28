import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./products.actions";

const INIT_STATE = {
  products: [],
  loading: false,
  error: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState: INIT_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      }),
});

export default productsSlice.reducer;
