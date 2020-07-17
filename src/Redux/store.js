import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { usersSlice } from "./usersReducer/userReducers";
import { pageSlice } from "./usersReducer/pageReducer";
import { positionSlice } from "./usersReducer/positionReducer";
import { tokenSlice } from "./usersReducer/tokenRuducer";
import { registerSlice } from "./usersReducer/userReducers";
import { errorSlice } from "./errorReducers/errorReducers";

const rootReducer = combineReducers({
  usersState: usersSlice.reducer,
  pageState: pageSlice.reducer,
  positionState: positionSlice.reducer,
  tokenState: tokenSlice.reducer,
  registerState: registerSlice.reducer,
  errorState: errorSlice.reducer,
});

const middleware = [...getDefaultMiddleware(thunk)];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
