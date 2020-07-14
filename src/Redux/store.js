import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { usersSlice } from "./usersReducer/userReducers";
// import { filterSlice } from './filterReducers/filterReducers';
// import { loadingSlice } from '../Redux/loading/loadingReducer';
import { errorSlice } from "./errorReducers/errorReducers";

const rootReducer = combineReducers({
  usersState: usersSlice.reducer,
  //   filterState: filterSlice.reducer,
  //   loadingState: loadingSlice.reducer,
  errorState: errorSlice.reducer,
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contactState'],
// };

// const defaultMiddlewareConfig = {
//   serializableCheck: {
//     ignoredActions: ['persist/PERSIST'],
//   },
// };

// const middlewareError = [...getDefaultMiddleware(defaultMiddlewareConfig)];

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [...getDefaultMiddleware(thunk)];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

// export const persistor = persistStore(store);
