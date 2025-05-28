import "./create_employee.css";
import { Head } from "../Login/props/head";
import { Employee_details } from "./props/form";

export const CreateEmp = () => {
  return (
    <div className="right-div">
      <div className="Header">
        <Head />
      </div>
      <div className="Form">
        <Employee_details />
      </div>
    </div>
  );
};
