// import { Input } from "./input";
// import { Options } from "./options_input";
// import FormButton from "./FormButton";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OriginalForm } from "./OriginalForm";
import FormButton from "./FormButton";
import { useDispatch, useSelector } from "react-redux";
import {
  type Employee,
  EMPLOYEE_ACTION_TYPES,
  type EmployeeState,
} from "../../../store/employee/employee.types";

export const Employee_details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeState = useSelector((state: EmployeeState) => state);
  // console.log("Dispatch Data: ", storeState.employees);

  const [employeeState, setEmployeeState] = useState<Employee>({
    name: "",
    id: "",
    joining: "",
    role: "",
    status: "",
    experience: "",
  });

  return (
    <OriginalForm
      employee={employeeState}
      setEmployee={setEmployeeState}
      isDisabled={false}
      submitButton={
        <FormButton
          type="button"
          value="Submit"
          className="blue"
          onClick={() => {
            alert(employeeState.name + " details created");
            dispatch({
              type: EMPLOYEE_ACTION_TYPES.CREATE,
              payload: employeeState,
            });
            // console.log(storeState);
            // console.log(store.getState());
            navigate("/employee");
          }}
        />
      }
    />
  );
};
