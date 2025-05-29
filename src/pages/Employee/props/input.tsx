import "./input.css";

export const Input = ({
  type,
  placeholder,
  label,
  value,
  isDisabled = false,
}: {
  type: string;
  placeholder?: string;
  label: string;
  value?: string;
  isDisabled?: boolean;
}) => {
  return (
    <div className="input_body">
      <label>{label}</label>
      <br />
      <input
        className="create_options"
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
      />
    </div>
  );
};
