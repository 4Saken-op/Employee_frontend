import "./employeeheader.css";

export const EmployeeHeader = () => {
  return (
    <div className="heading_section">
      <h2 className="heading">Employee List</h2>
      <div className="Edit">
        <img className="pen" src="/src/assets/images/pen.png" />
        <h3>Edit</h3>
      </div>
    </div>
  );
};
