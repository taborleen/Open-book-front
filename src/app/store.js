import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth";
import authorSlice from "../features/authorSlice";
import bestBookSlice from "../features/bestBookSlice";
import cartSlice from "../features/cartSlice";
import discountSlice from "../features/discountBookSlice";
import newBooksSlice from "../features/newBooksSlice";
import valueSlice from "../features/value"
import genresBookSlice from "../features/genresBookSlice";
import usersSlice from "../features/usersSlice";
import reducerBook from "../features/bookReducer";
import reviewsReducer from "../features/inputReducer";
import similarBookReducer from "../features/similarBooksReducer";
import basketBookSlice from '../features/basketSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    bestBook: bestBookSlice,
    newBook: newBooksSlice,
    genresBook: genresBookSlice,
    author: authorSlice,
    cart: cartSlice,
    search: valueSlice,
    user: usersSlice,
    discountBook: discountSlice,
    bookById: reducerBook,
    review: reviewsReducer,
    similarBook: similarBookReducer,
    basketBookSlice: basketBookSlice
  },
});
