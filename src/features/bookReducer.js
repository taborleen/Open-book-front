import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  loading: false,
};

export const getBookById = createAsyncThunk(
  "books/getBooks",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/books/${id}`);
      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);


export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookById.fulfilled, (state, action) => {
        state.books.push((action.payload))
      })
      .addCase(getBookById.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default bookSlice.reducer;
