import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videos: videosSlice,
    chat: chatSlice,
  },
});

export default store;
