import "./input_login.css";

export const LoginInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  ref,
}: {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
    />
  );
};
