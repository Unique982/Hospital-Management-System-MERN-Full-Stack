import { createSlice } from "@reduxjs/toolkit";
import API from "http";
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
    deleteBedID(state, action) {
      state.data = state.data.filter((bed) => bed.id !== action.payload.id);
    },
  },
});
export const { setBed, setStatus, deleteBedID } = bedSlice.actions;
export default bedSlice.reducer;

export function fetchBed() {
  return async function fetchBedThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get("/bed");
      dispatch(setBed(response.data.bedDatas));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
// delete function
export function deleteBed(bedId) {
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.delete(`/bed/${bedId}`);
      dispatch(deleteBedID({ id: bedId }));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
