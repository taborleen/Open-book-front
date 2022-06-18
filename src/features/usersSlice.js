import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const editBookmarks = createAsyncThunk(
  "user/editBookmarks",
  async ({ bookId }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const res = await fetch(
        `http://localhost:3001/users/${state.auth.user}/bookmarks`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
          body: JSON.stringify({ bookmarks : bookId }),
        }
      );

      const data = await res.json();

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

export const removeBookmark = createAsyncThunk(
  "user/removeBookmark",
  async (book, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const res = await fetch(
        `http://localhost:3001/users/${state.auth.user}/bookmarks/delete`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
          body: JSON.stringify({ bookmarks: book }),
        }
      );

      const data = await res.json();

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
      })
      .addCase(editBookmarks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
