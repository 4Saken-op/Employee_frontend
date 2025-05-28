import "./Button.css";

type buttonType = {
  label: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  name?: string;
};

export const Button = ({ label, onClick, name, type }: buttonType) => {
  return (
    <button type={type} name={name} className="button" onClick={onClick}>
      {label}
    </button>
  );
};
