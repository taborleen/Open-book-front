import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  likes: [],
  dislikes: [],
  adding: false,
};

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch("http://localhost:3001/reviews", {
        method: "POST",
        body: JSON.stringify({
          text: data.text,
          grade: data.optionsValue,
          book: data.bookId,
          user: data.userId,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.auth.token}`,
        },
      });
      data.callback();
      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const getAllReviews = createAsyncThunk(
  "reviews/getAllReviews",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/reviews`);
      const data = await res.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addRating = createAsyncThunk(
  "reviews/addRating",
  async ({ grade, id }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/books/rating/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: grade }),
      });

      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addLikes = createAsyncThunk(
  "reviews/addLikes",
  async ({ userId, reviewId, callback }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch(
        `http://localhost:3001/reviews/likes/${reviewId._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.auth.token}`,
          },
          body: JSON.stringify({ likes: userId }),
        }
      );
      callback();
      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const deleteLikes = createAsyncThunk(
  "reviews/deleteLikes",
  async ({ userId, reviewId, callback }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch(
        `http://localhost:3001/reviews/likes/remove/${reviewId._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.auth.token}`,
          },
          body: JSON.stringify({ likes: userId }),
        }
      );
      callback();
      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const deleteDislikes = createAsyncThunk(
  "reviews/deleteDislikes",
  async ({ userId, reviewId, callback }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch(
        `http://localhost:3001/reviews/dislikes/remove/${reviewId._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.auth.token}`,
          },
          body: JSON.stringify({ dislikes: userId }),
        }
      );
      callback();
      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addDislikes = createAsyncThunk(
  "reviews/addDislikes",
  async ({ userId, reviewId, callback }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const res = await fetch(
        `http://localhost:3001/reviews/dislikes/${reviewId._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.auth.token}`,
          },
          body: JSON.stringify({ dislikes: userId }),
        }
      );
      callback();
      return await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//   export const removeLikes = createAsyncThunk(
//     "reviews/removeLikes",
//     async ({userId,id}, thunkAPI) => {
//       try {
//         const state = thunkAPI.getState()
//         const res = await fetch(`http://localhost:3001/reviews/likes/remove/${id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization":   `Bearer ${state.auth.token}`

//             },
//             body: JSON.stringify({likes: userId})
//         });

//         return await res.json();
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e);
//       }
//     }
//   );

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.adding = false;
      })
      .addCase(addReview.pending, (state, action) => {
        state.adding = true;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(addLikes.fulfilled, (state, action) => {
        state.likes.push(action.payload);
      })
      .addCase(addDislikes.fulfilled, (state, action) => {
        state.dislikes.push(action.payload);
      });

    //   .addCase(removeLikes.fulfilled,(state,action)=>{
    //       state.likes.slice(action.payload, 1)
    //   })
  },
});

export default reviewSlice.reducer;
