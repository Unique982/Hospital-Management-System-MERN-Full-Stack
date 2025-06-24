import { configureStore } from "@reduxjs/toolkit";
import bedReducer from "./feature/bedSlice";
import specializationReducer from "./feature/specializationSlice";
import doctorReducer from "./feature/doctorSlice";
import patientReducer from "./feature/patientSlice";
import bloodDonorReducer from "./feature/bloodDonroSlice";
import appointmentReducer from "./feature/appointmentSlice";
import reportRoducer from "./feature/reportSlice";
import bedAllocatedRoducer from "./feature/bedsAllocated";
import nurseReducer from "./feature/nurseSlice";

const store = configureStore({
  reducer: {
    bed: bedReducer,
    specialization: specializationReducer,
    doctor: doctorReducer,
    patient: patientReducer,
    bloodDonor: bloodDonorReducer,
    appointment: appointmentReducer,
    report: reportRoducer,
    bedAllocated: bedAllocatedRoducer,
    nurse: nurseReducer,
  },
});
export default store;
