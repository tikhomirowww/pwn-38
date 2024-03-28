import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_API = "http://localhost:8006/products";

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    axios.post(PRODUCTS_API, product);
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await axios.get(PRODUCTS_API);
    return data;
  }
);
