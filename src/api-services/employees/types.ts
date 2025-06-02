import type {
  Address,
  Employee,
  Role,
  Status,
} from "../../store/employee/employee.types";

export type CreateResponse = Employee;

export type CreatePayload = Employee;

export type GetAllPayload = {};

export type GetAllResponse = Employee[];

export type GetOneResponse = {
  employeeID: string;
  email: string;
  name: string;
  age: number;
  address: Address;
  password: string;
  role: Role | null;
  dateOfJoining: Date | null;
  experience: number | null;
  status: Status | null;
  dept: {
    id: string;
    name: string;
  };
};

export type UpdatePayload = {
  id: string;
  employee: Employee;
};
