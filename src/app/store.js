import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth";
import bestBookSlice from "../features/bestBookSlice";
import reducerBook from "../features/bookReducer";
import  reviewsReducer  from "../features/inputReducer";
import newBooksSlice from "../features/newBooksSlice";
import similarBookReducer  from "../features/similarBooksReducer";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    bestBook: bestBookSlice,
    newBook: newBooksSlice,
    bookById: reducerBook,
    review: reviewsReducer,
    similarBook: similarBookReducer,
  },
});
