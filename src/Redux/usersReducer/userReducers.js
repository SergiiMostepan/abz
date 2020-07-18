import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    getUsersStarted: (state, action) => [...state],
    getUsersSuccess: (state, action) => [...state, ...action.payload.users],
    updateUsersSuccess: (state, action) => action.payload.users,

    postUserStarted: (state, action) => [...state],
    postUserSuccess: (state, action) => [...state, action.payload],
  },
});

export const registerSlice = createSlice({
  name: "register",
  initialState: false,
  reducers: {
    userRegistrationStarted: (state, action) => false,
    userRegistrationSuccess: (state, action) => action.payload,
    userRegistrationStatusClear: (state, action) => false,
  },
});
