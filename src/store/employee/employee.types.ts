/**
 * Type definitions for the employee domain in the Redux store.
 * This file contains:
 * - Employee data structure and related types (Address, Role, Status)
 * - Redux action types and action interfaces
 * - State interface for the employee slice
 */

export interface Address {
  houseNo: string | null;
  line1: string | null;
  line2: string | null;
  pincode: string | null;
}

export const EmployeeRole = {
  UI: "UI",
  UX: "UX",
  DEVELOPER: "DEVELOPER",
  HR: "HR",
} as const;

export type Role = (typeof EmployeeRole)[keyof typeof EmployeeRole];

export const EmployeeStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  PROBATION: "Probation",
} as const;

export type Status = (typeof EmployeeStatus)[keyof typeof EmployeeStatus];

export interface Employee {
  employeeId: string;
  email: string;
  name: string;
  age: number;
  address: Address;
  password: string;
  role: Role | null;
  dateOfJoining: Date | null;
  experience: number | null;
  status: Status | null;
  departmentId: string;
}
//   name: string;
//   id: string;
//   joining: string;
//   role: string;
//   status: string;
//   experience: string;
// }

export const EMPLOYEE_ACTION_TYPES = {
  CREATE: "employee/CREATE",
  DELETE: "employee/DELETE",
  UPDATE: "employee/UPDATE",
} as const;

export type EmployeeActionTypes =
  (typeof EMPLOYEE_ACTION_TYPES)[keyof typeof EMPLOYEE_ACTION_TYPES];

export interface EmployeeState {
  employees: Employee[];
}

export interface CreateEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.CREATE;
  payload: Employee; // employee id
}

export interface DeleteEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.DELETE;
  payload: Employee; // employee id
}

export interface UpdateEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.UPDATE;
  payload: Employee;
}

export type EmployeeAction =
  | CreateEmployeeAction
  | DeleteEmployeeAction
  | UpdateEmployeeAction;
