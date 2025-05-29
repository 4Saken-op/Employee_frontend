import { useSearchParams } from "react-router-dom";
import { DeleteEditButton } from "./props/DeleteEditButton";
import { EmployeeRow } from "./props/employee_row";
import { EmployeeDetailsHeader } from "./props/employeeDetailsheader";
import { Status } from "./props/Status";

export const EmployeeDetails = () => {
  type employeeType = {
    name: string;
    id: string;
    joining: string;
    role: string;
    status: string;
    experience: string;
  };

  let employees: employeeType[] = [
    {
      name: "Vishal M",
      id: "1",
      joining: "12.04.2021",
      role: "Full stack",
      status: "Probation",
      experience: "5years",
    },
    {
      name: "Susan Kurian",
      id: "2",
      joining: "12.04.2021",
      role: "UI",
      status: "Active",
      experience: "5years",
    },
    {
      name: "Vishal M",
      id: "3",
      joining: "12.04.2021",
      role: "Full stack",
      status: "Probation",
      experience: "5years",
    },
    {
      name: "Susan Kurian",
      id: "4",
      joining: "12.04.2021",
      role: "UI",
      status: "Inactive",
      experience: "5years",
    },
    {
      name: "Susan Kurian",
      id: "5",
      joining: "12.04.2021",
      role: "UI",
      status: "Inactive",
      experience: "5years",
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  // // const newSearchParams = new URLSearchParams(searchParams);
  let currentStatus = searchParams.get("status");

  console.log("Status in createEmployee: " + currentStatus);

  return (
    <div className="right-div">
      <div className="Header">
        <EmployeeDetailsHeader />
      </div>
      <EmployeeRow
        name="Name"
        color="lightblue"
        id="ID"
        joining="Date Of Joining"
        role="Role"
        status="Status"
        experience="Experience"
        action="Action"
      />

      {employees
        .filter(
          (item) => item.status === currentStatus || currentStatus === null
        )
        .map((item) => (
          <EmployeeRow
            key={item.id}
            name={item.name}
            id={item.id}
            joining={item.joining}
            role={item.role}
            status={<Status status={item.status} />}
            experience={item.experience}
            action={<DeleteEditButton id={item.id} />}
          />
        ))}
    </div>
  );
};
