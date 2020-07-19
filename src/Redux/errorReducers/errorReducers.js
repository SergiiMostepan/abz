import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: null,
  reducers: {
    getUsersError: (state, action) => action.payload,
    registerError: (state, action) => action.payload,
    registerErrorToNull: (state, action) => null,
    positionError: (state, action) => action.payload,
  },
});
