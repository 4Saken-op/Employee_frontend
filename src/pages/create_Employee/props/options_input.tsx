import "./options_tsx.css";

type optionType = {
  name: string;
  label: string;
  list: string[];
};

export const Options = ({ name, label, list }: optionType) => {
  return (
    <div className="options_body">
      <label>{label}</label>
      <br />
      <select name={name} required>
        <option value="" selected hidden disabled>
          {name}
        </option>
        {list.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
