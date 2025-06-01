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
      return { ...state };
    }
    case EMPLOYEE_ACTION_TYPES.UPDATE: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}
