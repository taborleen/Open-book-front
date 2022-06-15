import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  discountBooks: [],
};

export const fetchDiscountBooks = createAsyncThunk(
  "discountBooks/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/books`);

      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const newBooksSlice = createSlice({
  name: "discountBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDiscountBooks.fulfilled, (state, action) => {
      state.discountBooks = [];
      action.payload.filter((item) => {
        if (item.discount > 0) {
          state.discountBooks.push(item);
        }
        return false;
      });
    });
  },
});

export default newBooksSlice.reducer;
