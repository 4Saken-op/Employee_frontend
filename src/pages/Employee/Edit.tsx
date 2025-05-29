import "./create_employee.css";
import { Head } from "../Login/props/head";
import { EditContent } from "./props/EditContent";

export const EditEmp = () => {
  return (
    <div className="right-div">
      <div className="Header">
        <Head label="Edit Employee" />
      </div>
      <div className="Form">
        <EditContent />
      </div>
    </div>
  );
};
