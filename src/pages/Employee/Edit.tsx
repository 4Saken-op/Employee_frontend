import "./create_employee.css";
import { Head } from "../Login/props/head";
import { EditContent } from "./props/EditContent";
import { useLocation } from "react-router-dom";

export const EditEmp = () => {
  const employee = useLocation().state;
  console.log("Employees fetched using location: ", employee);
  return (
    <div className="right-div">
      <div className="Header">
        <Head label="Edit Employee" />
      </div>
      <div className="Form">
        <EditContent employee={employee} />
      </div>
    </div>
  );
};
