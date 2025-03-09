import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import commentSlice from "./commentsSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videos: videosSlice,
    chat: chatSlice,
    comment: commentSlice,
  },
});

export default store;
