import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const valueSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      //console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const { search } = valueSlice.actions;

export default valueSlice.reducer;
