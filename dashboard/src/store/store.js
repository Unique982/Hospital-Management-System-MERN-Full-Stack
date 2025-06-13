import { configureStore } from "@reduxjs/toolkit";
import bedReducer from "./feature/bedSlice";

const store = configureStore({
  reducer: {
    bed: bedReducer,
  },
});
export default store;
