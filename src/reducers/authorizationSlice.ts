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

const initialState: AuthSlice = {
  isAuth: false,
  isLoading: false,
  error: "",
  token: "",
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuth = action.payload;
      console.log(state.isAuth);
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
            //user.sendEmailVerification();
          });
        })
        .then((value) => {
          console.log(value);
        })
        .catch((error) => {
          console.log(error);
        });
      // if(res) {
      //   state.isAuth= true;
      // }
      state.isLoading = false;
    },
    resetPassword: (state, action) => {
      const res = sendPasswordResetEmail(auth, action.payload);
      res
        .then((value) => {
          console.log(value);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logoutUser: () => {
      signOut(auth);
    },
  },
});

export const {
  setIsAuthenticated,
  setIsLoading,
  createNewUser,
  loginUser,
  resetPassword,
} = authorizationSlice.actions;

export const isAuth = (state: RootState): boolean => state.authorization.isAuth;
export const isSigning = (state: RootState): boolean =>
  state.authorization.isLoading;
export const getErrorCode = (state: RootState): string =>
  state.authorization.error;
export default authorizationSlice.reducer;
