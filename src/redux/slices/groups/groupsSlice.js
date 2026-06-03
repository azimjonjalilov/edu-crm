import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
  loading: false,
  error: null,
  groups: null,
  groupByID: null,
};

export const getGroups = createAsyncThunk("groups/getGroups", async () => {
  try {
    const res = await axios.get("groups");
    return res.data;
  } catch (error) {
    console.log(error.message);
    return "Failed to get groups data";
  }
});

export const createGroup = createAsyncThunk(
  "groups/createGroup",
  async () => {},
);

export const deleteGroup = createAsyncThunk(
  "groups/deleteGroup",
  async () => {},
);

export const updateGroup = createAsyncThunk(
  "groups/updateGroup",
  async () => {},
);

export const groupByID = createAsyncThunk("groups/groupByID", async (id) => {
  try {
    const res = await axios.get(`groups/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
    return "Failed to get group data";
  }
});

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get groups
      .addCase(getGroups.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGroups.fulfilled, (state, action) => {
        state.loading = false;
        state.groups = action.payload;
      })
      .addCase(getGroups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // create group
      .addCase(createGroup.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createGroup.fulfilled, (state, action) => {
        state.loading = false;
        // state.groups = action.payload;
      })
      .addCase(createGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // update group
      .addCase(updateGroup.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateGroup.fulfilled, (state, action) => {
        state.loading = false;
        // state.groups = action.payload;
      })
      .addCase(updateGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // delete group
      .addCase(deleteGroup.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteGroup.fulfilled, (state, action) => {
        state.loading = false;
        // state.groups = action.payload;
      })
      .addCase(deleteGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default groupsSlice.reducer;
