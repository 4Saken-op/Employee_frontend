import "./status_options.css";

type optionType = {
  name: string;
  list: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const StatusOptions = ({ name, list, onChange }: optionType) => {
  return (
    <select className="status_select" name={name} onChange={onChange} required>
      <option value="" selected hidden disabled>
        {}
      </option>
      {list.map((item, idx) => (
        <option key={idx} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
