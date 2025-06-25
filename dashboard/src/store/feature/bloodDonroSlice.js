import API from "http";
import SingleBloodDonor from "views/admin/bloodDonor/SingleBloodDonor";

const { createSlice } = require("@reduxjs/toolkit");
const { STATUSES } = require("globals/status/StatusCode");

const bloodDonorSlice = createSlice({
  name: "bloodDonor",
  initialState: {
    data: [],
    single: null,
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setBloodDonor(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    deleteBloodDonorByID(state, action) {
      state.data = state.data.filter(
        (bloodDonor) => bloodDonor.id !== action.payload.id
      );
    },
    singleBloodDonor(state, action) {
      state.singleDonor = action.payload;
    },
  },
});
export const {
  setBloodDonor,
  setStatus,
  deleteBloodDonorByID,
  singleBloodDonor,
} = bloodDonorSlice.actions;
export default bloodDonorSlice.reducer;

// fecth all data
export function fetchBloodDonor() {
  return async function fetchBloodDonorThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get("/blood-donor");
      dispatch(setBloodDonor(response.data.donnorsdata));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function addBloodDonor(donnorsdata) {
  return async function addBloodDonorThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post("/blood-donor", donnorsdata);
      dispatch(setBloodDonor(response.data.donnorsdata));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
// delete function
export function deleteBloodDonor(bloodDonorId) {
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.delete(`/blood-donor/${bloodDonorId}`);
      dispatch(deleteBloodDonorByID({ id: bloodDonorId }));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// single data fetch
export function singleBloodDonorData(bloodDonorId) {
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get(`/blood-donor/${bloodDonorId}`);
      dispatch(singleBloodDonor(response.data.singleData));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
