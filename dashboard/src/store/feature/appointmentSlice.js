import API from "http";

const { createSlice } = require("@reduxjs/toolkit");
const { STATUSES } = require("globals/status/StatusCode");

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setAppointment(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.data = action.payload;
    },
  },
});
export const { setAppointment, setStatus } = appointmentSlice.actions;
export default appointmentSlice.reducer;

export function fetchAppointmentData() {
  return async function fetchAppointmentDataThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get("/appointment");
      dispatch(setAppointment(response.data.allAppointmentDatas));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
