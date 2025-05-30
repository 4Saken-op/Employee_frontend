import { useNavigate } from "react-router-dom";
import "./employee_row.css";

type row_type = {
  name: string;
  color?: string;
  id: string;
  joining: string;
  role: string;
  status: string | React.ReactNode;
  experience: string;
  action: string | React.ReactNode;
};

export const EmployeeRow = ({
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
  const goToEmployeePage = (id: string) => {
    navigate(id);
  };
  return (
    <div className="full_row" style={{ backgroundColor: color }}>
      <div className="content" onClick={() => goToEmployeePage(id)}>
        {name}{" "}
      </div>
      <div className="content" onClick={() => goToEmployeePage(id)}>
        {id}
      </div>
      <div className="content" onClick={() => goToEmployeePage(id)}>
        {joining}
      </div>
      <div className="content" onClick={() => goToEmployeePage(id)}>
        {role}
      </div>
      <div className="content" onClick={() => goToEmployeePage(id)}>
        {status}
      </div>
      <div className="content" onClick={() => goToEmployeePage(id)}>
        {experience}
      </div>

      <div className="content">{action}</div>
    </div>
  );
};
