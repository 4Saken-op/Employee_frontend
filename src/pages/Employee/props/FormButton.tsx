import "./FormButton.css";

export default function SmallButton({
  type,
  value,
  className,
  onClick,
}: {
  type: string;
  value: string;
  className: string;
  onClick?: () => void;
}) {
  return (
    <>
      <input
        type={type}
        value={value}
        className={className}
        onClick={onClick}
      />
    </>
  );
}
