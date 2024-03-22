import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/users.slice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
