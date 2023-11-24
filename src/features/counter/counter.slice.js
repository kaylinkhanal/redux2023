import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 100,
  age:29,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, actions) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset:  (state) => {
       state.count = initialState.count;
    },
  }
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
