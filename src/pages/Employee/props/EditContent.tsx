import { useNavigate, useParams } from "react-router-dom";
import FormButton from "./FormButton";
import { useState } from "react";
import { OriginalForm } from "./OriginalForm";
import { useDispatch, useSelector } from "react-redux";
// import {
//   EMPLOYEE_ACTION_TYPES,
//   type EmployeeState,
// } from "../../../store/employee/employee.types";

import type { GetOneResponse } from "../../../api-services/employees/types";
import type { Employee } from "../../../store/employee/employee.types";
import { updateEmployee } from "../../../store/employee/employeeReducer";
import { useUpdateEmpMutation } from "../../../api-services/employees/employee.api";

export const EditContent = ({ employee }: { employee: GetOneResponse }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  if (employee) {
    const [employeeState, setEmployeeState] = useState<Employee>({
      employeeID: employee.employeeID,
      email: employee.email,
      name: employee.name,
      age: employee.age,
      address: {
        houseNo: employee.address.houseNo,
        line1: employee.address.line1,
        line2: employee.address.line2,
        pincode: employee.address.pincode,
      },
      password: "",
      role: employee.role, // or EmployeeRole.DEVELOPER etc.
      dateOfJoining: employee.dateOfJoining,
      experience: employee.experience,
      status: employee.status, // one of the allowed Statuses
      deptID: Number(employee.dept.id),
    });
    const [updateEmp] = useUpdateEmpMutation();
    return (
      <OriginalForm
        employee={employeeState}
        setEmployee={setEmployeeState}
        isDisabled={true}
        submitButton={
          <FormButton
            type="button"
            value="Submit"
            className="blue"
            onClick={async () => {
              if (employeeState.password === "") {
                employeeState.password = employee.password;
              }
              alert(employeeState.name + "'s details Updated successsfullly");
              // dispatch(updateEmployee(employeeState));
              // dispatch({
              //   type: EMPLOYEE_ACTION_TYPES.UPDATE,
              //   payload: employeeState,
              // });
              // console.log(storeState);
              // console.log(store.getState());

              console.log("After update: ", employeeState);
              if (id) {
                const response = await updateEmp({
                  id: id,
                  employee: employeeState,
                });
                console.log("After update backend updated: ", response.data);
              }

              navigate("/employee/" + id);
            }}
          />
        }
      />
    );
  } else {
    alert("Invalid employee fetched");
  }
};
