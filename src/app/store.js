import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth";
import authorSlice from "../features/authorSlice";
import bestBookSlice from "../features/bestBookSlice";
import cartSlice from "../features/cartSlice";
import newBooksSlice from "../features/newBooksSlice";
import valueSlice from "../features/value"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    bestBook: bestBookSlice,
    newBook: newBooksSlice,
    author: authorSlice,
    cart: cartSlice,
    search: valueSlice,
  },
});
