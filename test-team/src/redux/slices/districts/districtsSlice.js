import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Constants from "../../../constants/paths/api";

export const districtsAction = createAsyncThunk(
  "list/district",
  async (listProvince, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const { data } = await axios.get(
        `http://192.168.102.6:3000/api/districts/getalls?cityID=${listProvince}`,
        config
      );
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const districtsSlices = createSlice({
  name: "districts",
  initialState: { data: [] },
  extraReducers: (builder) => {
    builder
      .addCase(districtsAction.pending, (state, action) => {
        state.loading = true;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(districtsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action?.payload;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(districtsAction.rejected, (state, action) => {
        state.loading = false;
        state.appError = action?.payload?.message;
        state.serverError = action?.error?.message;
      });
  },
});

export const selectDistricts = (state) => state?.districts;

export default districtsSlices.reducer;
