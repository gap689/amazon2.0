import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//The global Store Setup
export const store = configureStore({
  reducer: {
    basket: basketReducer, 
  },
});