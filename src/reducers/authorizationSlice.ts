import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import AuthSlice from "../types/authSlice";
import { auth, app } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getErrorMessage } from "../components/LoginPage/Errors";

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
      const credentials = action.payload;
      const res = signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
    },
    createNewUser: (state, action) => {
      state.isLoading = true;
      const newUser = action.payload;
      const res = createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
      res
        .then((dataBeforeEmail) => {
          auth.onAuthStateChanged(function (user) {
            console.log(user);
            state.user = user;
            //user.sendEmailVerification();
            state.isLoading = false;
          });
        })
        .catch((error) => {
          const errorMsg = getErrorMessage(error.code);
          console.log(errorMsg);
          state.message = errorMsg;

          state.isLoading = false;
        });
    },
    resetPassword: (state, action) => {
      const res = sendPasswordResetEmail(auth, action.payload);
      res
        .then((value) => {
          console.log(value);
        })
        .catch((error) => {
          state.message = getErrorMessage(error.message);
          console.log(error);
        });
    },
    logoutUser: (state) => {
      signOut(auth);
      state.user = null;
    },
    setError: (state, action) => {
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
  createNewUser,
  loginUser,
  resetPassword,
  setError,
  setStatus,
} = authorizationSlice.actions;

export const isAuth = (state: RootState): boolean => state.authorization.isAuth;
export const isSigning = (state: RootState): boolean =>
  state.authorization.isLoading;
export const getMessage = (state: RootState): string =>
  state.authorization.message;
export const getStatus = (state: RootState): string =>
  state.authorization.status;
export default authorizationSlice.reducer;
