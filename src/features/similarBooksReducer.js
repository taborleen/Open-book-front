import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  similarBooks: [],
  loading: false,
};


export const getAllBooks = createAsyncThunk(
    "books/getAllBooks",
    async (_, thunkAPI) => {
      try {
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
    builder
    .addCase(getAllBooks.fulfilled,(state, action)=>{
        state.books = action.payload
    });
  },
});

export default similarBookSlice.reducer;
