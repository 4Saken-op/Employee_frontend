import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeAction,
  type EmployeeState,
} from "./employee.types";

export function employeeReducer(
  state: EmployeeState = { employees: [] },
  action: EmployeeAction
): EmployeeState {
  switch (action.type) {
    case EMPLOYEE_ACTION_TYPES.CREATE: {
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    }
    case EMPLOYEE_ACTION_TYPES.DELETE: {
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.employeeId !== action.payload.employeeId
        ),
      };
    }
    case EMPLOYEE_ACTION_TYPES.UPDATE: {
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.employeeId === action.payload.employeeId
            ? { ...emp, ...action.payload }
            : emp
        ),
      };
    }
    default: {
      return state;
    }
  }
}
