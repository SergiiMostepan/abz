import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    // addContact: (state, action) => [...state, action.payload],
    // deleteContact: (state, action) =>
    //   state.filter(contact => contact.id !== action.payload),
    getUsersStarted: (state, action) => [...state],
    getUsersSuccess: (state, action) => action.payload,
    // getItemsFailure: (state, action) => [...state],
    // deleteUsersStarted: (state, action) => [...state],
    // deleteContactsSuccess: (state, action) =>
    //   state.filter((contact) => contact.id !== action.payload),
    postUserStarted: (state, action) => [...state],
    postUserSuccess: (state, action) => [...state, action.payload],
  },
});
