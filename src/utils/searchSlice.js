import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSearchResults: (state, action) => {
      // ✅ Update the cache by merging the existing state with new search results
      return { ...state, ...action.payload };
    },
  },
});

export const { cacheSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
