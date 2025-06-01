import { useParams } from "react-router-dom";
import "./create_employee.css";
// import { Head } from "../login/props/head";
// import { Employee_details } from "./props/form";

// import { useSearchParams } from "react-router-dom";
// import { Options } from "./props/options_input";
import { Detail } from "./props/detail";
import { EmployeeHeader } from "./props/employeeheader";
import { useSelector } from "react-redux";
import type { EmployeeState } from "../../store/employee/employee.types";

export const EmployeeDetailsByID = () => {
  const { id } = useParams();
  const newEmployees = useSelector((state: EmployeeState) => state.employees);
  const found = newEmployees.find((emp) => emp.employeeId === id);

  return (
    <div className="right-div">
      <div className="Header">
        <EmployeeHeader id={id} />
      </div>
      <div className="employee_detail">
        <Detail attr="Name" value={found?.name ? found.name : ""} />
        <Detail attr="Age" value={found?.age ? found.age.toString() : ""} />
        <Detail
          attr="Email"
          value={found?.email ? found.email.toString() : ""}
        />
        <Detail
          attr="Joining Date"
          value={
            found?.dateOfJoining
              ? found.dateOfJoining.toISOString().split("T")[0]
              : ""
          }
        />
        <Detail
          attr="DepartmentID"
          value={found?.departmentId ? found.departmentId.toString() : ""}
        />
        <Detail attr="Role" value={found?.role ? found.role : ""} />
        <Detail attr="Status" value={found?.status ? found.status : ""} />
        <Detail
          attr="Experience"
          value={found?.experience ? found.experience.toString() : ""}
        />
        <Detail
          attr="Address"
          value={
            found?.address
              ? found.address.houseNo +
                ", " +
                found.address.line1 +
                ", " +
                found.address.line2 +
                ", " +
                found.address.pincode
              : ""
          }
        />
        <Detail
          attr="Employee ID"
          value={found?.employeeId ? found.employeeId.toString() : ""}
        />
      </div>
    </div>
  );
};
