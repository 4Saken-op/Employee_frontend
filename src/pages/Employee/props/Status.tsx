export const Status = ({ status }: { status: string | null }) => {
  return (
    <div
      style={{
        backgroundColor:
          status === "ACTIVE"
            ? "#D3F4BE"
            : status === "PROBATION"
            ? "#F5ECB8"
            : "#FFBFBF",
        textAlign: "left",
        borderRadius: "20px",
        width: "80%",
      }}
    >
      {status}
    </div>
  );
};
background:;
