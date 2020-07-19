import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: null,
  reducers: {
    getUsersError: (state, action) => action.payload,
    registerError: (state, action) => action.payload,
    positionError: (state, action) => action.payload,
  },
});
