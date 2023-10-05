import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "./slice/sidebar";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
