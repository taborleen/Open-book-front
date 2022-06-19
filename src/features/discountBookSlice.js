import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  discountBooks: [],
  loading: false,
  error: null,
};

export const fetchDiscountBooks = createAsyncThunk(
  "discountBooks/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/books/discount`);

      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      } else {
        return thunkAPI.fulfillWithValue(data);
      }
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

    builder
      .addCase(fetchDiscountBooks.fulfilled, (state, action) => {
        state.discountBooks = action.payload;

        state.loading = false;
      })
      .addCase(fetchDiscountBooks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchDiscountBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default discountSlice.reducer;
