import { useSearchParams } from "react-router-dom";
import { DeleteEditButton } from "./props/DeleteEditButton";
import { EmployeeRow } from "./props/employee_row";
import { EmployeeDetailsHeader } from "./props/employeeDetailsheader";
import { Status } from "./props/Status";

import { DetailsTitleRow } from "./props/detailsTitles";

import { useSelectAllEmpQuery } from "../../api-services/employees/employee.api";

export const EmployeeDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useSelectAllEmpQuery({});
  // console.log("🚀 ~ EmployeeDetails ~ data:" + data);
  // // const newSearchParams = new URLSearchParams(searchParams);
  let currentStatus = searchParams.get("status");

  // console.log("Status in createEmployee: ", currentStatus);

  // const newEmployees = useAppSelector((state) => state.employee.employees);
  const newEmployees = data || [];
  // console.log("Emploees fetched from db: ", newEmployees);
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
            key={item.deptID}
            actualID={item.id}
            name={item.name}
            id={item.employeeID}
            joining={item.dateOfJoining}
            role={item.role}
            status={<Status status={item.status} />}
            experience={item.experience}
            action={
              <DeleteEditButton id={item.id} name={item.name} object={item} />
            }
          />
        ))}
    </div>
  );
};
