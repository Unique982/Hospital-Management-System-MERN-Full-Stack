import API from "http";

const { createSlice } = require("@reduxjs/toolkit");
const { STATUSES } = require("globals/status/StatusCode");

const patientSlice = createSlice({
  name: "patient",
  initialState: {
    data: [],
    single: null,
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setPatient(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    deletePatientByID(state, action) {
      state.data = state.data.filter(
        (patient) => patient.id !== action.payload.id
      );
    },
    singlePatientId(state, action) {
      state.singelData = action.payload;
    },
  },
});
export const { setPatient, setStatus, deletePatientByID, singlePatientId } =
  patientSlice.actions;
export default patientSlice.reducer;
export function fetchPatient(datas) {
  return async function fetchPatientThunk(dispatch) {
    try {
      const response = await API.get("/patient");
      dispatch(setPatient(response.data.datas));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
// delete function
export function deletePatient(patientId) {
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.delete(`/patient/${patientId}`);
      dispatch(deletePatientByID({ id: patientId }));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// single patient fetch
export function singlePatientData(patientId) {
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get(`/patient/${patientId}`);
      dispatch(singlePatientId(response.data.datas));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
