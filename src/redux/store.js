import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice/authSlice";
import dashboardReducer from "./slices/dashboard/dashboardSlice";
import studentsReducer from "./slices/students/studentsSlice";
import teachersReducer from "./slices/teachers/teachersSlice";
import groupsReducer from "./slices/groups/groupsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    students: studentsReducer,
    teachers: teachersReducer,
    groups: groupsReducer,
  },
});
