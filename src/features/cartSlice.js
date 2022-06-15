import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const fetchCart = createAsyncThunk(
  "carts/fetchCart",
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

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.carts = action.payload;
    });
  },
});

export default cartSlice.reducer;
