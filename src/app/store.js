import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth";
import authorSlice from "../features/authorSlice";
import bestBookSlice from "../features/bestBookSlice";
import cartSlice from "../features/cartSlice";
import discountSlice from "../features/discountBookSlice";
import newBooksSlice from "../features/newBooksSlice";
import genresBookSlice from "../features/genresBookSlice";
import usersSlice from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    bestBook: bestBookSlice,
    newBook: newBooksSlice,
    genresBook: genresBookSlice,
    author: authorSlice,
    cart: cartSlice,
    user: usersSlice,
    discountBook: discountSlice,
  },
});
