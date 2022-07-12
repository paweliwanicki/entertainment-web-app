import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import AuthSlice from "../types/authSlice";

const initialState: AuthSlice = {
  isAuth: false,
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    isAuthenticated: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { isAuthenticated } = authorizationSlice.actions;

export const isAuth = (state: RootState): boolean => state.authorization.isAuth;
export default authorizationSlice.reducer;
