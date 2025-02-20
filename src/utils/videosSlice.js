import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "youtube",
  initialState: {
    youtubeVideos: null,
  },
  reducers: {
    getAllYouTubeVideos: (state, action) => {
      state.youtubeVideos = action.payload;
    },
  },
});

export const { getAllYouTubeVideos } = videosSlice.actions;

export default videosSlice.reducer;
