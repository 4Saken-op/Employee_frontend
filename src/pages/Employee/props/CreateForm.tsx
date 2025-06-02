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
  EmployeeRole,
  type EmployeeState,
  EmployeeStatus,
} from "../../../store/employee/employee.types";
import { addEmployee } from "../../../store/employee/employeeReducer";

export const Employee_details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const storeState = useSelector((state: EmployeeState) => state);
  // console.log("Dispatch Data: ", storeState.employees);

  const [employeeState, setEmployeeState] = useState<Employee>({
    employeeId: "",
    email: "",
    name: "",
    age: 0,
    address: {
      houseNo: "",
      line1: "",
      line2: "",
      pincode: "",
    },
    password: "",
    role: null, // or EmployeeRole.DEVELOPER etc.
    dateOfJoining: null,
    experience: 0,
    status: null, // one of the allowed Statuses
    departmentId: "",
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
            dispatch(addEmployee(employeeState));
            // dispatch({
            //   type: EMPLOYEE_ACTION_TYPES.CREATE,
            //   payload: employeeState,
            // });
            // console.log(storeState);
            // console.log(store.getState());
            navigate("/employee");
            console.log(employeeState);
          }}
        />
      }
    />
  );
};
