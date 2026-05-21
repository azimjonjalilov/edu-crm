import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboard/dashboardSlice";
import studentsReducer from "./slices/students/studentsSlice";
import teachersReducer from "./slices/teachers/teachersSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    studenst: studentsReducer,
    teachers: teachersReducer,
  },
});
