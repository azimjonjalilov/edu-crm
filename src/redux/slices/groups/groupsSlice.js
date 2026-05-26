import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  groups: null,
};

export const getGroups = createAsyncThunk("groups/getGroups", async () => {});

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

export const groupByID = createAsyncThunk("groups/groupByID", async () => {});

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
