import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const getDashboardInfo = createAsyncThunk(
  "dashboard/getInfo",
  async () => {
    try {
      const res = await axios.get("dashboard/stats");
      return res.data;
    } catch (error) {
      console.log(error.message);
      return "Failed to get data";
    }
  },
);

const dashboardSlice = createSlice({
  name: "dashboardInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDashboardInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getDashboardInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
