import "./create_employee.css";
import { Head } from "../Login/props/head";
import { Employee_details } from "./props/CreateForm";

export const CreateEmp = () => {
  return (
    <div className="right-div">
      <div className="Header">
        <Head label="Create Employee" />
      </div>
      <div className="Form">
        <Employee_details />
      </div>
    </div>
  );
};
