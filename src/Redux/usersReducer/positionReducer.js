import { createSlice } from "@reduxjs/toolkit";

export const positionSlice = createSlice({
  name: "position",
  initialState: [],
  reducers: {
    getPositionStarted: (state, action) => [...state],
    getPositionSuccess: (state, action) => [...action.payload],
  },
});
