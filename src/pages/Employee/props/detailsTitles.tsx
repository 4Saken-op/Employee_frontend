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
      <div className="content" style={{ fontSize: "20px" }}>
        {name}
      </div>
      <div className="content" style={{ fontSize: "20px" }}>
        {id}
      </div>
      <div className="content" style={{ fontSize: "20px" }}>
        {joining}
      </div>
      <div className="content" style={{ fontSize: "20px" }}>
        {role}
      </div>
      <div className="content" style={{ fontSize: "20px" }}>
        {status}
      </div>
      <div className="content" style={{ fontSize: "20px" }}>
        {experience}
      </div>

      <div className="content" style={{ fontSize: "20px" }}>
        {action}
      </div>
    </div>
  );
};
