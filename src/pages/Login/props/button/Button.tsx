import "./Button.css";

type buttonType = {
  label: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  name?: string;
  disabled?: boolean;
};

export const Button = ({
  label,
  onClick,
  name,
  type,
  disabled,
}: buttonType) => {
  return (
    <button
      type={type}
      name={name}
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
