import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authorizationSlice";

export const store = configureStore({
  reducer: {
    authorization: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
