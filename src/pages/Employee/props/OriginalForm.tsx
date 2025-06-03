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
import { useSelectAllDeptQuery } from "../../../api-services/dept/dept.api";

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

  const { data } = useSelectAllDeptQuery({});
  // console.log("Departments fetched: ", data);
  const deptDict =
    data?.reduce((acc, dept) => {
      acc[dept.name] = dept.id;
      return acc;
    }, {} as { [key: string]: string }) || {};

  const rev_deptDict =
    data?.reduce((acc, dept) => {
      acc[dept.id] = dept.name;
      return acc;
    }, {} as { [key: string]: string }) || {};

  // console.log("Dictionary created", deptDict);

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
            placeholder="Enter Name"
            label="Employee Name"
            update={(e) => setEmployee({ ...employee, name: e.target.value })}
          />
          <Input
            value={employee.email ?? ""}
            type="string"
            placeholder="Enter Email"
            label="Email"
            update={(e) => setEmployee({ ...employee, email: e.target.value })}
          />
          <Input
            value={employee.password ?? ""}
            // type={isDisabled ? "password" : "text"}
            type="text"
            placeholder="Enter Password"
            label="Password"
            update={(e) =>
              setEmployee({ ...employee, password: e.target.value })
            }
            // isDisabled={isDisabled}
          />
          <Input
            type="number"
            value={
              employee.age || employee.age === 0 ? employee.age.toString() : ""
            }
            label="Age"
            placeholder="Enter Age"
            update={(e) =>
              setEmployee({
                ...employee,
                age: e.target.value === "" ? null : Number(e.target.value),
              })
            }
          />
          <Input
            type="date"
            value={
              employee.dateOfJoining
                ? new Date(employee.dateOfJoining).toISOString().split("T")[0]
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
            value={
              employee.experience || employee.experience === 0
                ? employee.experience.toString()
                : ""
            }
            label="Experience"
            placeholder="Enter Experience (in years)"
            update={(e) =>
              setEmployee({
                ...employee,
                experience:
                  e.target.value === "" ? null : Number(e.target.value),
              })
            }
          />
          {/* <Input
            value={employee.deptID ? employee.deptID.toString() : ""}
            type="string"
            placeholder="Department"
            label="Department"
            update={(e) =>
              setEmployee({ ...employee, deptID: Number(e.target.value) })
            }
          /> */}
          <Options
            value={employee.deptID ? rev_deptDict[employee.deptID] : ""}
            name="Choose Department"
            list={Object.keys(deptDict)}
            label="Department"
            onChange={(e) =>
              setEmployee({
                ...employee,
                deptID: Number(deptDict[e.target.value]),
              })
            }
          />
          <div
            className="Address_Box"
            style={{ flex: "display", flexDirection: "column" }}
          >
            <Input
              type="string"
              value={employee.address?.houseNo ?? ""}
              placeholder="Enter House No"
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
              placeholder="Enter Line 1"
              label="Line 1"
              update={(e) =>
                setEmployee({
                  ...employee,
                  address: {
                    ...employee.address,
                    line1: e.target.value,
                  },
                })
              }
            />
            <Input
              type="string"
              value={employee.address?.line2 ?? ""}
              placeholder="Enter Line 2"
              label="Line 2"
              update={(e) =>
                setEmployee({
                  ...employee,
                  address: {
                    ...employee.address,
                    line2: e.target.value,
                  },
                })
              }
            />
            <Input
              type="string"
              value={employee.address?.pincode ?? ""}
              placeholder="Enter Pincode"
              label="Pincode"
              update={(e) =>
                setEmployee({
                  ...employee,
                  address: {
                    ...employee.address,
                    pincode: e.target.value,
                  },
                })
              }
            />
          </div>

          <Input
            type="string"
            value={employee.employeeID ?? ""}
            placeholder="Enter Employee ID"
            label="Employee ID"
            update={(e) =>
              setEmployee({ ...employee, employeeID: e.target.value })
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
