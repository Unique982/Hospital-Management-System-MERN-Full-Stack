import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "../globals/status/StatusCode";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setPatientData(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setPatientData, setStatus } = authSlice.actions;
export default authSlice.reducer;
export function addPatient(data) {
  return async function addPatientThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        data
      );
      console.log(response.data);
      dispatch(setPatientData(response.data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
