import "./FormButton.css";

export default function SmallButton({
  type,
  value,
  className,
}: {
  type: string;
  value: string;
  className: string;
}) {
  return (
    <>
      <input type={type} value={value} className={className} />
    </>
  );
}
