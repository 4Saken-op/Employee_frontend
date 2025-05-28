import "./options_tsx.css";

type optionType = {
  name: string;
  label: string;
  list: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Options = ({ name, label, list, onChange }: optionType) => {
  return (
    <div className="options_body">
      <label>{label}</label>
      <br />
      <select name={name} onChange={onChange} required>
        <option value="" selected hidden disabled>
          {}
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
