import { configureStore } from "@reduxjs/toolkit";
import ramSlice from "./ram/ramSlice";
export const store = configureStore({
  reducer: {
    ram: ramSlice,
  },
});
