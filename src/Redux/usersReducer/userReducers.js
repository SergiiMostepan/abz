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
    // deleteUsersStarted: (state, action) => [...state],
    // deleteContactsSuccess: (state, action) =>
    //   state.filter((contact) => contact.id !== action.payload),
    postUserStarted: (state, action) => [...state],
    postUserSuccess: (state, action) => [...state, action.payload],
  },
});
