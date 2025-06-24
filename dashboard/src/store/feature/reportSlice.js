import { createSlice } from "@reduxjs/toolkit";
import API from "http";

const { STATUSES } = require("globals/status/StatusCode");

const reportSlice = createSlice({
  name: "report",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setReport(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setReport, setStatus } = reportSlice.actions;
export default reportSlice.reducer;

// fetch all report
export function fetchReport() {
  return async function fetchReport(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get("/report");
      dispatch(setReport(response.data.allReports));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// add function
export function addReport() {
  return async function addReportThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post("/report");
      dispatch(setReport(response.data.allReports));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
