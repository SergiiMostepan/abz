import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userRegistrationStarted: (state, action) => [...state],
    userRegistrationSuccess: (state, action) => console.log(action.payload),
    getUsersStarted: (state, action) => [...state],
    getUsersSuccess: (state, action) => [...state, ...action.payload.users],
    updateUsersSuccess: (state, action) => action.payload.users,

    postUserStarted: (state, action) => [...state],
    postUserSuccess: (state, action) => [...state, action.payload],
  },
});

export const registerSlice = createSlice({
  name: "register",
  initialState: "",
  reducers: {
    userRegistrationStarted: (state, action) => [...state],
    userRegistrationSuccess: (state, action) => console.log(action.payload),
  },
});
