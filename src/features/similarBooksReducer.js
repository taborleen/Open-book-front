import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  similarBooks: [],
  loading: false,
};

export const getSimilarBooks = createAsyncThunk(
  "books/getSimilarBooks",
  async (id, thunkAPI) => {
    try {
      console.log(65765765756);
      const res = await fetch(`http://localhost:3001/books/genres/${id}`);
      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const getAllBooks = createAsyncThunk(
    "books/getAllBooks",
    async (_, thunkAPI) => {
      try {
        console.log(65765765756);
        const res = await fetch(`http://localhost:3001/books`);
        return await res.json();
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

export const similarBookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSimilarBooks.fulfilled, (state, action) => {
      state.similarBooks.push(action.payload);
    })
    .addCase(getAllBooks.fulfilled,(state, action)=>{
        state.books = action.payload
    });
  },
});

export default similarBookSlice.reducer;
