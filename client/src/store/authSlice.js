import { createSlice } from "@reduxjs/toolkit";

import { STATUSES } from "../globals/status/StatusCode";
import API from "../http";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
    token :"",
  },
  reducers: {
    setUserData(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setToken(state,action){
      state.token = action.payload
    }
  },
});

export const { setUserData, setStatus, setToken } = authSlice.actions;
export default authSlice.reducer;
export function registerPatient(data) {
  return async function registerPatientThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post(
        "/register",
        data
      );
      dispatch(setUserData(response.data.data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
// login 
export function loginUser(data){
  return async function loginUserThunk(dispatch){
    dispatch(setStatus(STATUSES.LOADING));
    try{
      const response = await API.post("/login",data)
     
      dispatch(setUserData(response.data.data))
      dispatch(setToken(response.data.token));
      dispatch(setStatus(STATUSES.SUCCESS))
    }
    catch(err){
      console.log(err)
      dispatch(setStatus(STATUSES.ERROR))
    }
  }
} 
