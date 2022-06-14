import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  newBooks: [],
};

export const fetchNewBooks = createAsyncThunk(
  "newBooks/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/books`);
      return await res.json();
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
    builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
      state.newBooks = action.payload;
    });
  },
});

export default newBooksSlice.reducer;
