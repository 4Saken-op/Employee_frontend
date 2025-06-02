import { useNavigate } from "react-router-dom";
import "./employeeheader.css";
import type { GetOneResponse } from "../../../api-services/employees/types";

export const EmployeeHeader = ({
  id,
  object,
}: {
  id?: string;
  object: GetOneResponse | undefined;
}) => {
  const navigate = useNavigate();
  const gotToEdit = () => {
    console.log("Employee Details sent using navigate: ", object);
    navigate("edit", { state: object });
  };
  return (
    <div className="heading_section">
      <h2 className="heading">Employee Details of: {id}</h2>
      <div className="Edit" onClick={gotToEdit}>
        <div className="editpen">
          <img className="pen" src="/src/assets/images/white_pen.png" />
        </div>

        <h3>Edit</h3>
      </div>
    </div>
  );
};
