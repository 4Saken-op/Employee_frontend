import "./input_login.css";

export const LoginInput = ({
  type,
  placeholder,
  label,
  value,
  onChange,
  ref,
}: {
  type: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}) => {
  return (
    <input
      aria-label={label}
      type={type}
      name={label}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
    />
  );
};
