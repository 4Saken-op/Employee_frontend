import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  EMPLOYEE_ACTION_TYPES,
  type Employee,
  type EmployeeAction,
  type EmployeeState,
} from "./employee.types";

const initialState: EmployeeState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    deleteEmployee: (state, action: PayloadAction<Employee>) => {
      // console.log("🚀 ~ state:", state);
      // console.log("🚀 ~ action:", action);
      state.employees = state.employees.filter(
        (emp) => emp.employeeId != action.payload.employeeId
      );
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      // console.log("🚀 ~ action:", action);
      // console.log("🚀 ~ state:", state);
      state.employees = state.employees.map((emp) =>
        emp.employeeId === action.payload.employeeId
          ? { ...emp, ...action.payload }
          : emp
      );
    },
  },
});

export const { addEmployee, deleteEmployee, updateEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;

// export function employeeReducer(
//   state: EmployeeState = { employees: [] },
//   action: EmployeeAction
// ): EmployeeState {
//   switch (action.type) {
//     case EMPLOYEE_ACTION_TYPES.CREATE: {
//       return {
//         ...state,
//         employees: [...state.employees, action.payload],
//       };
//     }
//     case EMPLOYEE_ACTION_TYPES.DELETE: {
//       return {
//         ...state,
//         employees: state.employees.filter(
//           (emp) => emp.employeeId !== action.payload.employeeId
//         ),
//       };
//     }
//     case EMPLOYEE_ACTION_TYPES.UPDATE: {
//       return {
//         ...state,
//         employees: state.employees.map((emp) =>
//           emp.employeeId === action.payload.employeeId
//             ? { ...emp, ...action.payload }
//             : emp
//         ),
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }
