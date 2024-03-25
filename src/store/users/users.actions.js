import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_API = "http://localhost:8006/users";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const { data } = await axios.get(USERS_API);
  return data;
});

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user) => {
    await axios.post(USERS_API, user);
  }
);

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async (id) => {
    const { data } = await axios.get(`${USERS_API}/${id}`);
    return data;
  }
);
