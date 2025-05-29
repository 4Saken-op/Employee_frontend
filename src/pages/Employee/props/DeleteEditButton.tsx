import { useNavigate } from "react-router-dom";

export const DeleteEditButton = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  const goToRemove = (msg: string) => {
    if (msg === "edit") navigate("/employee/" + id + "/edit");
    else alert("Are you sure u want to delete");
  };
  return (
    <div
      style={{
        display: "flex",
        height: "fit-content",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      <img
        style={{ width: "20px", height: "25px" }}
        src="/src/assets/images/trash.png"
        onClick={() => goToRemove("trash")}
      />
      <img
        style={{ width: "25px", height: "25px" }}
        src="/src/assets/images/blue_pen.png"
        onClick={() => goToRemove("edit")}
      />
    </div>
  );
};
