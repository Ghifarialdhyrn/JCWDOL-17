<<<<<<< HEAD
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

=======
/** @format */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
const reducer = combineReducers({
  counter: counterSlice,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

<<<<<<< HEAD
export const useAppDispatch = () => useDispatch<AppDispatch>();
=======
export const useAppDispatch: () => AppDispatch = useDispatch;
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
