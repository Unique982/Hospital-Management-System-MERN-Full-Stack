import API from "http";

const { createSlice } = require("@reduxjs/toolkit");
const { STATUSES } = require("globals/status/StatusCode");

const bedsAllocatedSlice = createSlice({
  name: "bedsSlice",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setBedAllocated(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    deleteBedAllocatedId(state, action) {
      state.data = state.data.filter(
        (bedAllocated) => bedAllocated.id !== action.payload.id
      );
    },
  },
});
export const { setBedAllocated, setStatus, deleteBedAllocatedId } =
  bedsAllocatedSlice.actions;
export default bedsAllocatedSlice.reducer;

// fetch all data
export function fetchBedsAllocated() {
  return async function fetchBedsAllocatedThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get("/bed-allocated");
      dispatch(setBedAllocated(response.data.alldatas));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus.ERROR);
    }
  };
}
// delete function
export function deleteBedAllocated(allocatedId) {
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.delete(`/bed-allocated/${allocatedId}`);
      dispatch(deleteBedAllocatedId({ id: allocatedId }));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
