import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  author: [],
  book: [],
};

export const fetchAuthorBook = createAsyncThunk(
  "authorBook/fetchAuthorBook",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/authors/${id}`);
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const fetchBooks = createAsyncThunk(


    "books/fetchBooks",
    async (authorId, thunkAPI) => {
      try {
        const res = await fetch("http://localhost:3001/books");
        const data = await res.json();
        return {
          data: data,
          authorId: authorId
        }
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
);

export const authorBookSlice = createSlice({
  name: "authorBook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

    .addCase(fetchAuthorBook.fulfilled, (state, action) => {
      state.author = action.payload;
    })
    .addCase(fetchBooks.fulfilled, (state, action) => {
        state.book = action.payload.data
        state.book = state.book.filter((item)=> item.author._id === action.payload.authorId)
      });
  },
});

export default authorBookSlice.reducer;
