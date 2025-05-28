import "./create_employee.css";
// import { Head } from "../login/props/head";
// import { Employee_details } from "./props/form";

// import { useSearchParams } from "react-router-dom";
// import { Options } from "./props/options_input";
import { Detail } from "./props/detail";
import { EmployeeHeader } from "./props/employeeheader";

export const EmployeeDetailsByID = () => {
  // const statuses = ["All", "Active", "Inactive", "Probation"];
  // const [searchParams, setSearchParams] = useSearchParams();

  // console.log("searchParams", searchParams.get("status"));

  // const handleStatusFilterChange = (status: string) => {
  //   const newSearchParams = new URLSearchParams(searchParams);

  //   if (status === "All") {
  //     newSearchParams.delete("status");
  //   } else {
  //     newSearchParams.set("status", status);
  //   }

  //   setSearchParams(newSearchParams);
  // };

  return (
    <div className="right-div">
      <div className="Header">
        <EmployeeHeader />
      </div>
      {/* <Options
        label="Status Select"
        name="status"
        list={statuses}
        onChange={(e) => handleStatusFilterChange(e.target.value)}
      /> */}
      <div className="employee_detail">
        <Detail attr="Employee Name" value="Vishal" />
        <Detail attr="Joining Date" value="12.04.2021" />
        <Detail attr="Role" value="Full Stack" />
        <Detail attr="Status" value="Probation" />
        <Detail attr="Experience" value="5 yrs" />
        <Detail attr="Address" value="Kochi, Kerala" />
        <Detail attr="Employee ID" value="12345678" />
      </div>
    </div>
  );
};
