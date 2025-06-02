import logger from "redux-logger";

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import employeeReducer from "./employee/employeeReducer";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

// export const store = createStore(employeeReducer, applyMiddleware(logger));

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    //department: departmentReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector<RootState, any>;
