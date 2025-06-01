export const Status = ({ status }: { status: string | null }) => {
  return (
    <div
      style={{
        backgroundColor:
          status === "Active"
            ? "#D3F4BE"
            : status === "Probation"
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
