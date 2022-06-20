import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bestBook: [],
  loading: false,
  error: null,
};

export const fetchBestBook = createAsyncThunk(
  "bestBook/fetchBestBook",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/books");
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

export const bestBookSlice = createSlice({
  name: "bestBook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBestBook.fulfilled, (state, action) => {
        state.bestBook = action.payload;
        state.loading = false;
      })
      .addCase(fetchBestBook.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchBestBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bestBookSlice.reducer;
