import { useNavigate, useParams } from "react-router-dom";
import FormButton from "./FormButton";
import { useState } from "react";
import { OriginalForm } from "./OriginalForm";
import { useSelector } from "react-redux";
import type { EmployeeState } from "../../../store/employee/employee.types";

export const EditContent = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const newEmployees = useSelector((state: EmployeeState) => state.employees);
  const found = newEmployees.find((emp) => emp.employeeId === id);
  if (found) {
    const [employeeState, setEmployeeState] = useState(found);
    const onclick = () => {
      alert(employeeState.name + "'s details Updated successsfullly");
      console.log(employeeState);

      navigate("/employee/" + employeeState.employeeId);
    };

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
            onClick={onclick}
          />
        }
      />
    );
  } else {
    alert("Invalid employee found");
  }
};
