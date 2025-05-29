import "./head.css";

export const Head = ({ label }: { label: string }) => {
  return (
    <section className="heading_section">
      <h1>{label}</h1>
    </section>
  );
};
