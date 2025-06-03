import { useParams } from "react-router-dom";
import "./create_employee.css";
// import { Head } from "../login/props/head";
// import { Employee_details } from "./props/form";

// import { useSearchParams } from "react-router-dom";
// import { Options } from "./props/options_input";
import { Detail } from "./props/detail";
import { EmployeeHeader } from "./props/employeeheader";
import { useSelectOneEmpQuery } from "../../api-services/employees/employee.api";
// import { useSelector } from "react-redux";
// import type { EmployeeState } from "../../store/employee/employee.types";
// import { useAppSelector } from "../../store/store";

export const EmployeeDetailsByID = () => {
  const { id } = useParams();
  // console.log("ID FROM URL: " + id);
  // const newEmployees = useSelector((state: EmployeeState) => state.employees);
  // const newEmployees = useAppSelector((state) => state.employee.employees);
  // const found = newEmployees.find((emp: any) => emp.employeeId === id);
  const { data: found } = useSelectOneEmpQuery(Number(id));
  console.log("🚀 ~ EmployeeDetailsByID ~ found:", found);
  return (
    <div className="right-div">
      <div className="Header">
        <EmployeeHeader id={id} object={found} />
      </div>
      <div className="employee_detail">
        <Detail attr="Name" value={found?.name ? found.name : ""} />
        <Detail
          attr="Age"
          value={found?.age || found?.age === 0 ? found.age.toString() : ""}
        />
        <Detail
          attr="Email"
          value={found?.email ? found.email.toString() : ""}
        />
        <Detail
          attr="Joining Date"
          value={
            found?.dateOfJoining
              ? new Date(found.dateOfJoining).toISOString().split("T")[0]
              : ""
          }
        />
        <Detail
          attr="DepartmentID"
          value={found?.dept ? found.dept.name : ""}
        />
        <Detail attr="Role" value={found?.role ? found.role : ""} />
        <Detail attr="Status" value={found?.status ? found.status : ""} />
        <Detail
          attr="Experience"
          value={
            found?.experience || found?.experience === 0
              ? found.experience.toString()
              : ""
          }
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
          value={found?.employeeID ? found.employeeID.toString() : ""}
        />
      </div>
    </div>
  );
};
