import API from "http";

const { createSlice } = require("@reduxjs/toolkit");
const { STATUSES } = require("globals/status/StatusCode");

const nurseSlice = createSlice({
  name: "nurse",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setNurse(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setNurse, setStatus } = nurseSlice.actions;
export default nurseSlice.reducer;

// fetch all data
export function fetchNurse(nurseDatas) {
  return async function fetchNurseThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get("/nurse");
      dispatch(setStatus(response.data.nurseDatas));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
