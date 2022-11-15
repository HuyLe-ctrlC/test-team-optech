import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Constants from "../../../constants/paths/api";

//action position
export const levelsAction = createAsyncThunk(
  "position/apply",
  async (listLevels, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    try {
      const { data } = await axios.get(
        "https://3e15-42-119-83-87.ap.ngrok.io/api/position-candidate/getall",
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

const levelsSlices = createSlice({
  name: "levels",
  initialState: { data: [] },
  extraReducers: (builder) => {
    builder

      .addCase(levelsAction.pending, (state, action) => {
        state.loading = true;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(levelsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action?.payload;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(levelsAction.rejected, (state, action) => {
        state.loading = false;
        state.appError = action?.payload?.message;
        state.serverError = action?.error?.message;
      });
  },
});

export const selectLevels = (state) => state?.levels;

export default levelsSlices.reducer;
