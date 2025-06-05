// import { Input } from "./input";
// import { Options } from "./options_input";
// import FormButton from "./FormButton";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OriginalForm } from "./OriginalForm";
import FormButton from "./FormButton";
import { useDispatch } from "react-redux";
import { type Employee } from "../../../store/employee/employee.types";
import { addEmployee } from "../../../store/employee/employeeReducer";
import { useCreateEmpMutation } from "../../../api-services/employees/employee.api";

export const Employee_details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const storeState = useSelector((state: EmployeeState) => state);
  // console.log("Dispatch Data: ", storeState.employees);

  const [employeeState, setEmployeeState] = useState<Employee>({
    employeeID: "",
    email: "",
    name: "",
    age: null,
    address: {
      houseNo: "",
      line1: "",
      line2: "",
      pincode: "",
    },
    password: "",
    role: null, // or EmployeeRole.DEVELOPER etc.
    dateOfJoining: null,
    experience: null,
    status: null, // one of the allowed Statuses
    deptID: null,
  });

  const [createEmp] = useCreateEmpMutation();

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
          onClick={async () => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(employeeState.email)) {
              alert("Invalid Email");
              navigate("/employee/create");
            } else {
              // dispatch(addEmployee(employeeState));
              // dispatch({
              //   type: EMPLOYEE_ACTION_TYPES.CREATE,
              //   payload: employeeState,
              // });
              // console.log(storeState);
              // console.log(store.getState());
              console.log("Created Employee details: ", employeeState);
              const response = await createEmp(employeeState);
              console.log("🚀 ~ response:", response);
              if (response.data) {
                // console.log("🚀 ~ response.data:", response.data);
                alert(employeeState.name + " details created");
              } else {
                alert("Creation unsuccessful");
              }
              navigate("/employee/create");
            }
          }}
        />
      }
    />
  );
};
