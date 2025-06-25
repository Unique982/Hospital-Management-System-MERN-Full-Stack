import API from "http";
import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "globals/status/StatusCode";

const specializationSlice = createSlice({
  name: "specialization",
  initialState: {
    data: [],
    single: null,
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setSpecialization(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    deleteSpecializationId(state, action) {
      state.data = state.data.filter(
        (specialization) => specialization.id !== action.payload.id
      );
    },
    singleSpecializationData(state, action) {
      state.singleData = action.payload;
    },
  },
});
export const {
  setSpecialization,
  setStatus,
  deleteSpecializationId,
  singleSpecializationData,
} = specializationSlice.actions;

export default specializationSlice.reducer;

export function addSpecialization(spDatas) {
  return async function addSpecializationThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post("/specialization", spDatas);
      dispatch(setSpecialization(response.data.spDatas));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
export function fetchSpecailzation(spDatas) {
  return async function fetchSpecailzationThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get("/specialization");
      dispatch(setSpecialization(response.data.spDatas));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// delete function
export function deleteSpecialization(specializationId) {
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.delete(`/specialization/${specializationId}`);
      dispatch(deleteSpecializationId({ id: specializationId }));

      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.SUCCESS));
    }
  };
}

// single data fetch
export function singleSpecialization(specializationId) {
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get(`/specialization/${specializationId}`);
      dispatch(singleSpecializationData(response.data.spDatas));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
