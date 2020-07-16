import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    getTokenStarted: (state, action) => state,
    getTokenSuccess: (state, action) => action.payload,
  },
});
