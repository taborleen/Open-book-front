import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const editBookmarks = createAsyncThunk(
  "user/editBookmarks",
  async ({ book, id }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const res = await fetch(`http://localhost:3001/users/${id}/bookmarks`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
        },
        body: JSON.stringify({ book }),
      });

      const data = await res.json();
      console.log(data);

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      } else {
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  checked: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editBookmarks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editBookmarks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.checked = true;
      })
      .addCase(editBookmarks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
