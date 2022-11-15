import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Constants from "../../../constants/paths/api";

//TODO: Login Action
export const loginUserAction = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      //make http call
      const { data } = await axios.post(
        Constants.API_URL_LOGIN,
        userData,
        config
      );
      //save user in the local storage
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      //This is !error && !error.response
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Logout action
export const logoutAction = createAsyncThunk(
  "/user/logout",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      localStorage.removeItem("userInfo");
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//get user from the local storage and place into initialState
const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//Password reset
// export const passwordResetAction = createAsyncThunk(
//   "password/reset",
//   async (user, { rejectWithValue, getState, dispatch }) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     //http call
//     try {
//       const { data } = await axios.put(
//         `${baseUrl}/api/users/reset-password`,
//         { password: user?.password, token: user?.token },
//         config
//       );
//       return data;
//     } catch (error) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );

//slices === reducer
const usersSlices = createSlice({
  name: "users",
  initialState: { userAuth: userLoginFromStorage },
  extraReducers: (builder, state) => {
    //login
    builder
      .addCase(loginUserAction.pending, (state, action) => {
        state.loading = true;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userAuth = action?.payload;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.loading = false;
        state.appError = action?.payload?.message;
        state.serverError = action?.error?.message;
      });
    //logout
    builder
      .addCase(logoutAction.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userAuth = undefined;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.loading = false;
        state.appError = action?.payload?.message;
        state.serverError = action?.error?.message;
      });
  },
});

export const selectUser = (state) => state?.users;

export default usersSlices.reducer;
