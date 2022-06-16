import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  genresBook: [],
  book: [],
};

export const fetchGenresBook = createAsyncThunk(
  "genresBook/fetchGenresBook",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/genres");
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/books/genre/${_id}`);
      const data = await res.json();
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchGetBooks = createAsyncThunk(
  "books/fetchGetBooks",
  async (_,thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/books");
      const data = await res.json();
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const genresBookSlice = createSlice({
  name: "genresBook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenresBook.fulfilled, (state, action) => {
        state.genresBook = action.payload;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.book = action.payload
      })
      .addCase(fetchGetBooks.fulfilled, (state, action) => {
        state.book.data = action.payload;
      })
  },
});

export default genresBookSlice.reducer;
