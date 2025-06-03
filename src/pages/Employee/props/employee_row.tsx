import { useNavigate } from "react-router-dom";
import "./employee_row.css";
import type { Role, Status } from "../../../store/employee/employee.types";

type row_type = {
  actualID: string;
  name: string;
  color?: string;
  id: string;
  joining: string | null;
  role: Role | null;
  status: Status | React.ReactNode;
  experience: number | null;
  action: string | React.ReactNode;
};

export const EmployeeRow = ({
  actualID,
  name,
  color,
  id,
  joining,
  role,
  status,
  experience,
  action,
}: row_type) => {
  const navigate = useNavigate();
  const goToEmployeePage = () => {
    navigate("/employee/" + actualID);
  };

  return (
    <div className="full_row" style={{ backgroundColor: color }}>
      <div className="content" onClick={() => goToEmployeePage()}>
        {name}
      </div>
      <div className="content" onClick={() => goToEmployeePage()}>
        {id}
      </div>
      <div className="content" onClick={() => goToEmployeePage()}>
        {joining ? joining.split("T")[0] : ""}
      </div>
      <div className="content" onClick={() => goToEmployeePage()}>
        {role}
      </div>
      <div className="content" onClick={() => goToEmployeePage()}>
        {status}
      </div>
      <div className="content" onClick={() => goToEmployeePage()}>
        {experience}
      </div>

      <div className="content">{action}</div>
    </div>
  );
};
