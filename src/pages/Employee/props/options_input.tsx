import "./options_tsx.css";

type optionType = {
  name: string;
  label: string;
  list: string[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Options = ({ name, label, list, value, onChange }: optionType) => {
  return (
    <div className="options_body">
      <label>{label}</label>
      <br />
      <select
        className="another_select"
        name={name}
        value={value}
        onChange={onChange}
        required
      >
        <option value="" selected hidden>
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
