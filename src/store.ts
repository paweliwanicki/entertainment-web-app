import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import authReducer from "./reducers/authorizationSlice";

export const store = configureStore({
  reducer: {
    authorization: authReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
