import "./create_employee.css";
// import { Head } from "../login/props/head";
// import { Employee_details } from "./props/form";
import { EmployeeIDHead } from "./props/employeeIDhead";
import { useSearchParams } from "react-router-dom";
import { Options } from "./props/options_input";

export const EmployeeDetailsByID = () => {
  const statuses = ["All", "Active", "Inactive", "Probation"];
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("searchParams", searchParams.get("status"));

  const handleStatusFilterChange = (status: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (status === "All") {
      newSearchParams.delete("status");
    } else {
      newSearchParams.set("status", status);
    }

    setSearchParams(newSearchParams);
  };

  return (
    <div className="right-div">
      <div className="Header">
        <EmployeeIDHead />
      </div>
      <Options
        label="Status Select"
        name="status"
        list={statuses}
        onChange={(e) => handleStatusFilterChange(e.target.value)}
      />
    </div>
  );
};
