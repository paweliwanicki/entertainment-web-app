import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import AuthSlice from "../types/authSlice";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const initialState: AuthSlice = {
  isAuth: false,
  isSigning: false
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuth = action.payload;
      console.log(state.isAuth)
    },
    setIsSigning: (state, action) => {
      state.isSigning = action.payload;
    },
    loginUser: (state,action) => {
      
    },
    signUpUser: (state,action) => {
      
    }
  },
});

export const { setIsAuthenticated, setIsSigning } = authorizationSlice.actions;

export const isAuth = (state: RootState): boolean => state.authorization.isAuth;
export const isSigning = (state: RootState): boolean => state.authorization.isSigning;
export default authorizationSlice.reducer;
