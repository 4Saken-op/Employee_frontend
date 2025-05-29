import { useNavigate } from "react-router-dom";
import { Input } from "./input";
import { Options } from "./options_input";
import FormButton from "./FormButton";

export const EditContent = () => {
  const roles = ["HR", "UI", "UX", "TESTER"];
  const statuses = ["Working", "Not Working"];
  const navigate = useNavigate();
  const employee = {
    name: "Vishal M",
    id: "1",
    joining: "12.04.2021",
    role: "Full stack",
    status: "Probation",
    experience: "5years",
  };
  const onclick = (id: string) => {
    // alert("Signed Out!");
    // localStorage.setItem("isLoggedIn", "false");
    // navigate("/login");
    alert("Updated successsfullly");
    navigate("/employee/" + id);
  };

  const goBack = () => {
    navigate("/employee");
  };

  return (
    <section className="form-section">
      <form action="">
        <div className="div1">
          <Input
            value={employee.name}
            type="text"
            placeholder="Employee Name"
            label="Employee Name"
          />
          <Input
            type="string"
            value={employee.id}
            label="Employee ID"
            isDisabled={true}
          />
          <Input type="string" value={employee.joining} label="Joining date" />
          <Options
            value={employee.role}
            name="Choose Role"
            list={roles}
            label="Roles"
          />
          <Options
            value={employee.status}
            name="Choose Status"
            list={statuses}
            label="Status"
          />
          <Input type="string" value={employee.experience} label="Experience" />
          <Input type="string" placeholder="House No" label="Address" />
          <Input type="string" placeholder="Address" label="Address Line 1" />
          <Input type="string" placeholder="Address" label="Address LIne 2" />
        </div>

        <div className="div2">
          <FormButton
            type="submit"
            value="Submit"
            className="blue"
            onClick={() => onclick(employee.id)}
          />
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
