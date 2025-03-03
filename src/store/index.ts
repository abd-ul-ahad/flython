"use client";
import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./slices/UserSlice";
import FlightSearchSlice from "./slices/FlightsSearchSlices";

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    flightssearch: FlightSearchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
