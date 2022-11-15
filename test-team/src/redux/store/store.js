import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/usersSlice";
import provinces from "../slices/provinces/provincesSlices";
import districts from "../slices/districts/districtsSlice";
import applies from "../slices/applies/appliesSlice";
import levels from "../slices/levels/levelsSlice";
const store = configureStore({
  reducer: { users: usersReducer, provinces, applies, levels, districts },
});

export default store;
