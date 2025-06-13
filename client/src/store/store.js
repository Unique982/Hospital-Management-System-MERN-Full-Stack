import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
// create object
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
