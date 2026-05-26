import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice/authSlice";
import dashboardReducer from "./slices/dashboard/dashboardSlice";
import studentsReducer from "./slices/students/studentsSlice";
import teachersReducer from "./slices/teachers/teachersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    studenst: studentsReducer,
    teachers: teachersReducer,
  },
});
