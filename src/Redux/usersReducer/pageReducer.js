import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: 1,
  reducers: {
    getPageStarted: (state, action) => [...state],
    getPageSuccess: (state, action) => action.payload.total_pages,
  },
});
