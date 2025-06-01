import { useNavigate } from "react-router-dom";
import { Input } from "./input";
import { Options } from "./options_input";
import FormButton from "./FormButton";
import {
  EmployeeRole,
  EmployeeStatus,
  type Employee,
  type Role,
  type Status,
} from "../../../store/employee/employee.types";

export const OriginalForm = ({
  employee,
  setEmployee,
  isDisabled,
  submitButton,
}: {
  employee: Employee;
  setEmployee: (employee: Employee) => void;
  isDisabled: boolean;
  submitButton: React.ReactNode;
}) => {
  const roles = Object.values(EmployeeRole);
  const statuses = Object.values(EmployeeStatus);

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/employee");
  };

  return (
    <section className="form-section">
      <form action="">
        <div className="div1">
          <Input
            value={employee.name ?? ""}
            type="string"
            placeholder="Employee Name"
            label="Employee Name"
            update={(e) => setEmployee({ ...employee, name: e.target.value })}
          />
          <Input
            value={employee.email ?? ""}
            type="string"
            placeholder="Email"
            label="Email"
            update={(e) => setEmployee({ ...employee, email: e.target.value })}
          />
          <Input
            value={employee.password ?? ""}
            type={isDisabled ? "password" : "text"}
            placeholder="Password"
            label="Password"
            update={(e) =>
              setEmployee({ ...employee, password: e.target.value })
            }
            isDisabled={isDisabled}
          />
          <Input
            type="number"
            value={employee.age ? employee.age.toString() : ""}
            label="Age"
            placeholder="Age"
            update={(e) =>
              setEmployee({
                ...employee,
                age: e.target.value === "" ? 0 : Number(e.target.value),
              })
            }
          />
          <Input
            type="date"
            value={
              employee.dateOfJoining
                ? employee.dateOfJoining.toISOString().split("T")[0]
                : ""
            } // Converts Date -> "YYYY-MM-DD"
            label="Joining date"
            placeholder="Joining date"
            update={
              (e) =>
                setEmployee({
                  ...employee,
                  dateOfJoining: e.target.value
                    ? new Date(e.target.value)
                    : null,
                }) // Converts back to Date
            }
          />
          <Options
            value={employee.role ? employee.role : ""}
            name="Choose Role"
            list={roles}
            label="Roles"
            onChange={(e) =>
              setEmployee({ ...employee, role: e.target.value as Role })
            }
          />
          <Options
            value={employee.status ?? ""}
            name="Choose Status"
            list={statuses}
            label="Status"
            onChange={(e) =>
              setEmployee({ ...employee, status: e.target.value as Status })
            }
          />
          <Input
            type="number"
            value={employee.experience ? employee.experience.toString() : ""}
            label="Experience"
            placeholder="Experience"
            update={(e) =>
              setEmployee({
                ...employee,
                experience: e.target.value === "" ? 0 : Number(e.target.value),
              })
            }
          />
          <Input
            value={employee.departmentId ?? ""}
            type="string"
            placeholder="Employee Name"
            label="Department"
            update={(e) =>
              setEmployee({ ...employee, departmentId: e.target.value })
            }
          />
          <div
            className="Address_Box"
            style={{ flex: "display", flexDirection: "column" }}
          >
            <Input
              type="string"
              value={employee.address?.houseNo ?? ""}
              placeholder="House No"
              label="House No"
              update={(e) =>
                setEmployee({
                  ...employee,
                  address: {
                    ...employee.address,
                    houseNo: e.target.value, // assuming houseNo is a string
                  },
                })
              }
            />
            <Input
              type="string"
              value={employee.address?.line1 ?? ""}
              placeholder="Line 1"
              label="Line 1"
              update={(e) =>
                setEmployee({
                  ...employee,
                  address: {
                    ...employee.address,
                    line1: e.target.value, // assuming houseNo is a string
                  },
                })
              }
            />
            <Input
              type="string"
              value={employee.address?.line2 ?? ""}
              placeholder="Line 2"
              label="Line 2"
              update={(e) =>
                setEmployee({
                  ...employee,
                  address: {
                    ...employee.address,
                    line2: e.target.value, // assuming houseNo is a string
                  },
                })
              }
            />
            <Input
              type="string"
              value={employee.address?.pincode ?? ""}
              placeholder="Pincode"
              label="Pincode"
              update={(e) =>
                setEmployee({
                  ...employee,
                  address: {
                    ...employee.address,
                    pincode: e.target.value, // assuming houseNo is a string
                  },
                })
              }
            />
          </div>

          <Input
            type="string"
            value={employee.employeeId ?? ""}
            placeholder="Employee ID"
            label="Employee ID"
            update={(e) =>
              setEmployee({ ...employee, employeeId: e.target.value })
            }
            isDisabled={isDisabled}
          />
        </div>

        <div className="div2">
          {submitButton}
          <FormButton
            type="reset"
            value="Cancel"
            className="white"
            onClick={goBack}
          />
        </div>
      </form>
    </section>
  );
};
