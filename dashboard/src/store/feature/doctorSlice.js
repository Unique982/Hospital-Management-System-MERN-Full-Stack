import API from "http";
const { createSlice } = require("@reduxjs/toolkit");
const { STATUSES } = require("globals/status/StatusCode");

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setDoctor(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.data = action.payload;
    },
  },
});
export const { setDoctor, setStatus } = doctorSlice.actions;
export default doctorSlice.reducer;

// add method
export function addDoctors(doctorData) {
  return async function addDoctorThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post("/doctor", doctorData);
      dispatch(setDoctor(response.data.doctorData));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// fetch data
export function fetechDoctors(doctorDatas) {
  return async function fetchDoctorThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get("/doctor");
      dispatch(setDoctor(response.data.doctorDatas));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
