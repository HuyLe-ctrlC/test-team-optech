import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Constants from "../../../constants/paths/api";

export const provincesAction = createAsyncThunk(
  "list/provinces",
  async (listProvince, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const { data } = await axios.get(Constants.API_URL_GET_ALL_CITY, config);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const provincesSlices = createSlice({
  name: "provinces",
  initialState: { data: [] },
  extraReducers: (builder) => {
    builder
      .addCase(provincesAction.pending, (state, action) => {
        state.loading = true;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(provincesAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action?.payload;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(provincesAction.rejected, (state, action) => {
        state.loading = false;
        state.appError = action?.payload?.message;
        state.serverError = action?.error?.message;
      });
  },
});

export const selectProvinces = (state) => state?.provinces;

export default provincesSlices.reducer;
