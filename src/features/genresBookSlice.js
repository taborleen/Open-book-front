import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  genresBook: [],
  books: [],
};

export const fetchGenres = createAsyncThunk(
  "genresBook/fetchGenres",
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

export const fetchGenresBooks = createAsyncThunk(
  "books/fetchGenresBooks",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/books/genre/${id}`);
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchGetBooks = createAsyncThunk(
  "books/fetchGetBooks",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/books");
      const data = await res.json();
      return data;
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
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genresBook = action.payload;
      })
      .addCase(fetchGenresBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(fetchGetBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      });
  },
});

export default genresBookSlice.reducer;
