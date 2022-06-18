import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    reviews: [],
    likes:[],
    adding: false
  };

  export const addReview = createAsyncThunk(
    "reviews/addReview",
    async (data, thunkAPI) => {
        
      try {
          const state = thunkAPI.getState()
        const res = await fetch("http://localhost:3001/reviews", {
          method: "POST",
          body: JSON.stringify({
              text: data.text,
              grade:data.optionsValue,
              book: data.bookId,
              user: data.userId
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.auth.token}`
            },
        });
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
        return await res.json();
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

  export const addRating = createAsyncThunk(
    "reviews/addRating",
    async ({grade, id}, thunkAPI) => {
      try {
        const res = await fetch(`http://localhost:3001/books/rating/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({rating: grade})
        });
        
        return await res.json();
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

  export const addLikes = createAsyncThunk(
    "reviews/addLikes",
    async (id, thunkAPI) => {
      try {
        const state = thunkAPI.getState()
        const res = await fetch(`http://localhost:3001/reviews/likes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization":   `Bearer ${state.auth.token}`

            },
            body: JSON.stringify({})
        });
        
        return await res.json();
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

  

  export const reviewSlice = createSlice({
      name:"reviews",
      initialState,
      reducers:{},
      extraReducers:(builder)=>{
          builder
          .addCase(addReview.fulfilled, (state, action)=>{
              state.reviews.push(action.payload)

              state.adding=false
          })
          .addCase(addReview.pending, (state, action)=>{
              state.adding=true
          })
          .addCase(getAllReviews.fulfilled, (state, action)=>{
              state.reviews = action.payload
          })
      }
  })

  export default reviewSlice.reducer