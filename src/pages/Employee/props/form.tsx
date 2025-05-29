import { Input } from "./input";
import { Options } from "./options_input";
import "./form.css";
import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";

export const Employee_details = () => {
  const roles = ["HR", "UI", "UX", "TESTER"];
  const statuses = ["Working", "Not Working"];
  const navigate = useNavigate();

  const onclick = () => {
    alert("Created successsfullly");
    navigate("/employee");
  };

  const goBack = () => {
    navigate("/employee");
  };

  return (
    <section className="form-section">
      <form action="">
        <div className="div1">
          <Input
            type="text"
            placeholder="Employee Name"
            label="Employee Name"
          />
          <Input type="number" placeholder="Employee id" label="Employee ID" />
          <Input type="date" placeholder="joining date" label="Joining date" />
          <Options name="Choose Role" list={roles} label="Roles" />
          <Options name="Choose Status" list={statuses} label="Status" />
          <Input
            type="number"
            placeholder="Experience (in years)"
            label="Experience"
          />
          <Input type="address" placeholder="House No" label="Address" />
          <Input type="address" placeholder="Address" label="Address Line 1" />
          <Input type="address" placeholder="Address" label="Address LIne 2" />
        </div>

        <div className="div2">
          <FormButton
            type="button"
            value="Create"
            className="blue"
            onClick={onclick}
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
