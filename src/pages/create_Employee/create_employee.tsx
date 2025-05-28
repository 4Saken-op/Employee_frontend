import "./create_employee.css";
import { Head } from "../login/props/head";
import { Sidebar } from "./props/sidebar";
import { Employee_details } from "./props/form";

export const CreateEmployee = () => {
  return (
    <div className="main">
      <div className="left-div">
        <img className="logo" src="/src/assets/images/kv-logo.png" alt="" />
        <Sidebar />
        <div className="side-bar"></div>
      </div>
      <div className="right-div">
        <div className="Header">
          <Head />
        </div>
        <div className="Form">
          <Employee_details />
        </div>
      </div>
    </div>
  );
};
