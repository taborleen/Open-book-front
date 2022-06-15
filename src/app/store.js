import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth";
import bestBookSlice from "../features/bestBookSlice";
import newBooksSlice from "../features/newBooksSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    bestBook: bestBookSlice,
    newBook: newBooksSlice,
  },
});
