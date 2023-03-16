import { configureStore, combineReducers } from "@reduxjs/toolkit";
import trackingSlice from "../slices/trackingSlice";
import trackingNumbersSlice from "../slices/trackingNumbersSlice";
import departmentsSlice from "../slices/departmentsSlice";
import { persistStore, persistReducer } from "redux-persist";
import { persistConfig, middlewareConfig } from "./config";

const rootReducer = combineReducers({
  trackingState: trackingSlice,
  trackingNumbersState: trackingNumbersSlice,
  departmentsState: departmentsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfig),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
