import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import { useState } from "react";
import { OriginalForm } from "./OriginalForm";

type employeeType = {
  name: string;
  id: string;
  joining: string;
  role: string;
  status: string;
  experience: string;
};

export const EditContent = () => {
  const navigate = useNavigate();
  const [employeeState, setEmployeeState] = useState({
    name: "Vishal M",
    id: "1",
    joining: "12.04.2021",
    role: "Full stack",
    status: "Probation",
    experience: "5years",
  });
  const onclick = () => {
    alert(employeeState.name + "'s details Updated successsfullly");
    console.log(employeeState);

    navigate("/employee/" + employeeState.id);
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
};
