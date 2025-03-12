import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenuIcon: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenuIcon: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenuIcon, closeMenuIcon } = appSlice.actions;

export default appSlice.reducer;
