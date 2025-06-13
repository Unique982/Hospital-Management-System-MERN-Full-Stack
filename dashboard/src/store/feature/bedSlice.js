import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ctreate status
const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
});
// create slice state name 'bed' xa
const bedSlice = createSlice({
  name: "bed",
  initialState: {
    data: [],
    status: "",
  },
  reducers: {
    setBed(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setBed, setStatus } = bedSlice.actions;
export default bedSlice.reducer;

export function fetchBed() {
  return async function fetchBedThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await axios.get("http://localhost:5000/api/bed");
      dispatch(setBed(response.data.bedDatas));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
