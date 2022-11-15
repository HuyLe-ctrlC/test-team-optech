import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Constants from "../../../constants/paths/api";

//action apply
export const appliesAction = createAsyncThunk(
  "candidate/apply",
  async (applies, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    try {
      const { data } = await axios.post(
        "https://3e15-42-119-83-87.ap.ngrok.io/api/candidate/apply",
        applies,
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

const appliesSlices = createSlice({
  name: "applies",
  initialState: { data: {} },
  extraReducers: (builder) => {
    builder
      .addCase(appliesAction.pending, (state, action) => {
        state.loading = true;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(appliesAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action?.payload;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(appliesAction.rejected, (state, action) => {
        state.loading = false;
        state.appError = action?.payload?.message;
        state.serverError = action?.error?.message;
      });
  },
});

export const selectApplies = (state) => state?.applies;

export default appliesSlices.reducer;
