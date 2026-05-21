import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  teachers: null,
};

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async () => {},
);

export const createTeacher = createAsyncThunk(
  "teachers/createTeacher",
  async () => {},
);

export const updateTeacher = createAsyncThunk(
  "teachers/updateTeacher",
  async () => {},
);

export const deleteTeacher = createAsyncThunk(
  "teachers/deleteTeacher",
  async () => {},
);

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getTeachers
      .addCase(getTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers = action.payload;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default teachersSlice.reducer;
