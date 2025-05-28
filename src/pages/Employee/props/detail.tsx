import "./detail.css";

export const Detail = ({ attr, value }: { attr: string; value: string }) => {
  return (
    <div className="detail_main">
      <div className="attr">{attr}</div>
      <div className="value">{value}</div>
    </div>
  );
};
