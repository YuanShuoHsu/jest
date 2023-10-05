import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "01",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    selectedSidebar: (state, data) => {
      state.value = data.payload;
    },
  },
});

export const { selectedSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
