import { useNavigate } from "react-router-dom";
import "./employeeheader.css";

export const EmployeeHeader = ({ id }: { id?: string }) => {
  const navigate = useNavigate();
  const gotToEdit = () => {
    navigate("edit");
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
