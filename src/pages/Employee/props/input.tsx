import type { ChangeEvent } from "react";
import "./input.css";

export const Input = ({
  type,
  placeholder,
  label,
  value,
  isDisabled = false,
  update,
}: {
  type: string;
  placeholder?: string;
  label: string;
  value?: string;
  isDisabled?: boolean;
  update?: React.ChangeEventHandler<HTMLInputElement>;
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
        onChange={update}
      />
    </div>
  );
};
