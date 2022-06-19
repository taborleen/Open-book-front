import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  genresBook: [],
  books: [],
  loading: false,
  error: null,
};

export const fetchGenres = createAsyncThunk(
  "genresBook/fetchGenres",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/genres");
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

export const fetchGenresBooks = createAsyncThunk(
  "books/fetchGenresBooks",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/books/genre/${id}`);
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

export const fetchGetBooks = createAsyncThunk(
  "books/fetchGetBooks",
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

export const genresBookSlice = createSlice({
  name: "genresBook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genresBook = action.payload;
        state.loading = false;
      })
      .addCase(fetchGenres.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchGenresBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(fetchGenresBooks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchGenresBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchGetBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(fetchGetBooks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchGetBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default genresBookSlice.reducer;
