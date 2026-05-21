import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  students: null,
};

export const getStudents = createAsyncThunk(
  "students/getStudents",
  async () => {},
);

export const createStudent = createAsyncThunk(
  "students/createStudent",
  async () => {},
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async () => {},
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async () => {},
);

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getStudents
      .addCase(getStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default studentsSlice.reducer;
