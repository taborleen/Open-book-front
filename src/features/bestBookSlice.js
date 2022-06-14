import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bestBook: [],
};

export const fetchBestBook = createAsyncThunk(
  "bestBook/fetchBestBook",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/books");
      const data = await res.json();
      return data
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
    builder.addCase(fetchBestBook.fulfilled, (state, action) => {
      state.bestBook = action.payload;
    });
  },
});

export default bestBookSlice.reducer;
