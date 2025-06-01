import "./employee_row.css";

type row_type = {
  name: string;
  color?: string;
  id: string;
  joining: string;
  role: string;
  status: string;
  experience: string;
  action: string;
};

export const DetailsTitleRow = ({
  name,
  color,
  id,
  joining,
  role,
  status,
  experience,
  action,
}: row_type) => {
  return (
    <div className="full_row" style={{ backgroundColor: color }}>
      <div className="content">{name}</div>
      <div className="content">{id}</div>
      <div className="content">{joining}</div>
      <div className="content">{role}</div>
      <div className="content">{status}</div>
      <div className="content">{experience}</div>

      <div className="content">{action}</div>
    </div>
  );
};
