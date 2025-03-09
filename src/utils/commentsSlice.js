import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },

  reducers: {
    addComments: (state, action) => {
      // state.comments = { ...state.comments, ...action.payload };
      state.comments = action.payload;
    },
  },
});

export const { addComments } = commentSlice.actions;

export default commentSlice.reducer;
