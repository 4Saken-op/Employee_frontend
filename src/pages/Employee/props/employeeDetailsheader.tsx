import { useNavigate, useSearchParams } from "react-router-dom";
import "./employeeheader.css";
import { StatusOptions } from "./status_options";

export const EmployeeDetailsHeader = () => {
  const statuses = ["All", "ACTIVE", "INACTIVE", "PROBATION"];
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

  const navigate = useNavigate();
  const jumpToEmployee = () => {
    navigate("/employee/create");
  };
  return (
    <div className="heading_section">
      <h2 className="heading">Employee List</h2>
      <div className="Update">
        <div style={{ paddingTop: "5px" }}>Filter By</div>
        <StatusOptions
          name="status"
          list={statuses}
          onChange={(e) => handleStatusFilterChange(e.target.value)}
        />
        <div className="circle" onClick={jumpToEmployee}>
          <img className="plus" src="/src/assets/images/plus.png" />
        </div>
        <div style={{ marginRight: "30px", paddingTop: "5px" }}>
          Create Employee
        </div>
      </div>
    </div>
  );
};
