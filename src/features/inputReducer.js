import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    reviews: [],
    adding: false
  };

  export const addReview = createAsyncThunk(
    "todos/addReview",
    async (data, thunkAPI) => {
      try {
        const res = await fetch("http://localhost:3001/reviews", {
          method: "POST",
          body: JSON.stringify({
            text: data.text,
            grade:data.optionsValue,
            book: data.bookId,
            
          }),
          headers: {
            "Content-Type": "application/json",
          },
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
      }
  })

  export default reviewSlice.reducer