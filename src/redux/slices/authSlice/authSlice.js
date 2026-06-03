import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { setItem, removeItem } from "../../../helpers/storageService";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    const res = await axios.post("auth/login", user);
    return res.data;
  } catch (error) {
    console.log("Email yoki parol noto'g'ri");
    return "Email yoki parol noto'g'ri";
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      removeItem("token");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        setItem("token", action.payload.token);
        state.user = action.payload.admin;
        console.log(action.payload.message);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
