import { useNavigate } from "react-router-dom";
import { Input } from "./input";
import { Options } from "./options_input";
import FormButton from "./FormButton";

type employeeType = {
  name: string;
  id: string;
  joining: string;
  role: string;
  status: string;
  experience: string;
};

export const OriginalForm = ({
  employee,
  setEmployee,
  isDisabled,
  submitButton,
}: {
  employee: employeeType;
  setEmployee: (employee: employeeType) => void;
  isDisabled: boolean;
  submitButton: React.ReactNode;
}) => {
  const roles = ["HR", "UI", "UX", "TESTER"];
  const statuses = ["Probation", "Active", "Inactive"];

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/employee");
  };

  return (
    <section className="form-section">
      <form action="">
        <div className="div1">
          <Input
            value={employee.name ?? ""}
            type="text"
            placeholder="Employee Name"
            label="Employee Name"
            update={(e) => setEmployee({ ...employee, name: e.target.value })}
          />
          <Input
            type="string"
            value={employee.id ?? ""}
            placeholder="Employee ID"
            label="Employee ID"
            update={(e) => setEmployee({ ...employee, id: e.target.value })}
            isDisabled={isDisabled}
          />
          <Input
            type="string"
            value={employee.joining ?? ""}
            label="Joining date"
            placeholder="Joining date"
            update={(e) =>
              setEmployee({ ...employee, joining: e.target.value })
            }
          />
          <Options
            value={employee.role ?? ""}
            name="Choose Role"
            list={roles}
            label="Roles"
            onChange={(e) => setEmployee({ ...employee, role: e.target.value })}
          />
          <Options
            value={employee.status ?? ""}
            name="Choose Status"
            list={statuses}
            label="Status"
            onChange={(e) =>
              setEmployee({ ...employee, status: e.target.value })
            }
          />
          <Input
            type="string"
            value={employee.experience ?? ""}
            label="Experience"
            placeholder="Experience"
            update={(e) =>
              setEmployee({ ...employee, experience: e.target.value })
            }
          />
          <Input type="string" placeholder="House No" label="Address" />
          <Input
            type="string"
            placeholder="Address Line 1"
            label="Address Line 1"
          />
          <Input
            type="string"
            placeholder="Address Line 2"
            label="Address LIne 2"
          />
        </div>

        <div className="div2">
          {submitButton}
          <FormButton
            type="reset"
            value="Cancel"
            className="white"
            onClick={goBack}
          />
        </div>
      </form>
    </section>
  );
};
