import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, getUsers } from "./users.actions";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    error: false,
    loading: false,
    users: [],
    currentUser: null,
  },
  reducers: {
    logout: (state) => {
      state.currentUser = "null";
      localStorage.removeItem("currentUser");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      });
  },
});

export default usersSlice.reducer;
export const { logout } = usersSlice.actions;
