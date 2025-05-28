import "./input.css";

export const Input = ({
  type,
  placeholder,
  label,
}: {
  type: string;
  placeholder: string;
  label: string;
}) => {
  return (
    <div className="input_body">
      <label>{label}</label>
      <br />
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
