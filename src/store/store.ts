import logger from "redux-logger";

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { employeeReducer } from "./employee/employeeReducer";

export const store = createStore(employeeReducer, applyMiddleware(logger));
