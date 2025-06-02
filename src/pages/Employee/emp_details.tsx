import { useSearchParams } from "react-router-dom";
import { DeleteEditButton } from "./props/DeleteEditButton";
import { EmployeeRow } from "./props/employee_row";
import { EmployeeDetailsHeader } from "./props/employeeDetailsheader";
import { Status } from "./props/Status";
import { useSelector } from "react-redux";
import type {
  Employee,
  EmployeeState,
} from "../../store/employee/employee.types";
import { DetailsTitleRow } from "./props/detailsTitles";
import { useAppSelector } from "../../store/store";

export const EmployeeDetails = () => {
  // let employees: Employee[] = [
  //   {
  //     name: "Vishal M",
  //     id: "1",
  //     joining: "12.04.2021",
  //     role: "Full stack",
  //     status: "Probation",
  //     experience: "5years",
  //   },
  //   {
  //     name: "Susan Kurian",
  //     id: "2",
  //     joining: "12.04.2021",
  //     role: "UI",
  //     status: "Active",
  //     experience: "5years",
  //   },
  //   {
  //     name: "Vishal M",
  //     id: "3",
  //     joining: "12.04.2021",
  //     role: "Full stack",
  //     status: "Probation",
  //     experience: "5years",
  //   },
  //   {
  //     name: "Susan Kurian",
  //     id: "4",
  //     joining: "12.04.2021",
  //     role: "UI",
  //     status: "Inactive",
  //     experience: "5years",
  //   },
  //   {
  //     name: "Susan Kurian",
  //     id: "5",
  //     joining: "12.04.2021",
  //     role: "UI",
  //     status: "Inactive",
  //     experience: "5years",
  //   },
  // ];
  const [searchParams, setSearchParams] = useSearchParams();
  // // const newSearchParams = new URLSearchParams(searchParams);
  let currentStatus = searchParams.get("status");

  console.log("Status in createEmployee: ", currentStatus);

  const newEmployees = useAppSelector((state) => state.employee.employees);
  console.log(newEmployees);
  // employees = [...employees, ...newEmployees];

  return (
    <div className="right-div">
      <div className="Header">
        <EmployeeDetailsHeader />
      </div>
      <DetailsTitleRow
        name="Name"
        color="lightblue"
        id="ID"
        joining="Date Of Joining"
        role="Role"
        status="Status"
        experience="Experience"
        action="Action"
      />

      {newEmployees
        .filter(
          (item: any) => item.status === currentStatus || currentStatus === null
        )
        .map((item: any) => (
          <EmployeeRow
            key={item.employeeId}
            name={item.name}
            id={item.employeeId}
            joining={item.dateOfJoining}
            role={item.role}
            status={<Status status={item.status} />}
            experience={item.experience}
            action={<DeleteEditButton id={item.employeeId} name={item.name} />}
          />
        ))}
    </div>
  );
};
