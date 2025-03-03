"use client";
import FlightSearch from "@/types/FlightSearch";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ApiState {
  response: FlightSearch | null;
}

const initialState: ApiState = {
  response: null,
};

export const FlightSearchSlice = createSlice({
  name: "flightssearch",
  initialState,
  reducers: {
    setFlightsSearch: (state, action: PayloadAction<FlightSearch>) => {
      state.response = action.payload;
    },
    clearFlightsSearch: (state) => {
      state.response = null;
    },
  },
});

export const { setFlightsSearch, clearFlightsSearch } = FlightSearchSlice.actions;

export default FlightSearchSlice;
