import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  discountBooks: [],
};

export const fetchDiscountBooks = createAsyncThunk(
  "discountBooks/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/books/discount`);

      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const discountSlice = createSlice({
  name: "discountBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDiscountBooks.fulfilled, (state, action) => {
      state.discountBooks = action.payload;
    });
  },
});

export default discountSlice.reducer;
