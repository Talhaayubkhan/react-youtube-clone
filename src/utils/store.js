import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videos: videosSlice,
  },
});

export default store;
