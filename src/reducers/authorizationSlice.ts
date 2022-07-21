import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import AuthSlice from "../types/authSlice";
import User from "../types/User";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const initialState: AuthSlice = {
  isAuth: false,
  isLoading: false,
  message: "",
  token: "",
  user: null,
  status: "",
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuth = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      signOut(auth);
      state.user = null;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const {
  setIsAuthenticated,
  setIsLoading,
  loginUser,
  logoutUser,
  setMessage,
  setStatus,
} = authorizationSlice.actions;

export const isAuth = (state: RootState): boolean => state.authorization.isAuth;
export const isLoading = (state: RootState): boolean =>
  state.authorization.isLoading;
export const getMessage = (state: RootState): string =>
  state.authorization.message;
export const getStatus = (state: RootState): string =>
  state.authorization.status;
export const getUser = (state: RootState): User | null =>
  state.authorization.user;
export default authorizationSlice.reducer;
