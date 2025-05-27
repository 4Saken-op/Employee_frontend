import "./input_login.css";

export const LoginInput = ({
  type,
  placeholder,
  name,
  onChange,
  ref,
}: {
  type: string;
  placeholder: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
    />
  );
};
