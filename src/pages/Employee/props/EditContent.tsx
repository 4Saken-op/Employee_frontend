import { useNavigate, useParams } from "react-router-dom";
import FormButton from "./FormButton";
import { useState } from "react";
import { OriginalForm } from "./OriginalForm";
import { useDispatch, useSelector } from "react-redux";
import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeState,
} from "../../../store/employee/employee.types";

export const EditContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const newEmployees = useSelector((state: EmployeeState) => state.employees);
  const found = newEmployees.find((emp) => emp.employeeId === id);
  if (found) {
    const [employeeState, setEmployeeState] = useState(found);

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
            onClick={() => {
              alert(employeeState.name + "'s details Updated successsfullly");
              dispatch({
                type: EMPLOYEE_ACTION_TYPES.UPDATE,
                payload: employeeState,
              });
              // console.log(storeState);
              // console.log(store.getState());
              console.log(employeeState);
              navigate("/employee/" + employeeState.employeeId);
            }}
          />
        }
      />
    );
  } else {
    alert("Invalid employee found");
  }
};
