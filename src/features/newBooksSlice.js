import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  newBooks: [],
  loading: false,
  error: null,
};

export const fetchNewBooks = createAsyncThunk(
  "newBooks/fetchNewBooks",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/books/new`);

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

export const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewBooks.fulfilled, (state, action) => {
        state.newBooks = action.payload;
        state.loading = false;
      })
      .addCase(fetchNewBooks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchNewBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default newBooksSlice.reducer;
