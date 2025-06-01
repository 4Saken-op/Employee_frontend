import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

export const DeleteEditButton = ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  const navigate = useNavigate();

  const goToRemove = (msg: string) => {
    if (msg === "edit") navigate("/employee/" + id + "/edit");
    else alert("Are you sure u want to delete");
  };

  const handleDelete = () => {
    setShowModal(false);
    alert("Deleted " + { name });
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <>
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
          onClick={() => setShowModal(true)}
        />
        <img
          style={{ width: "25px", height: "25px" }}
          src="/src/assets/images/blue_pen.png"
          onClick={() => goToRemove("edit")}
        />
      </div>

      {showModal && (
        <div className="modal_overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h3>Are you sure?</h3>
            <h4>
              Do you really want to delete <strong>{name}</strong>
            </h4>
            <div className="modal-actions">
              <button className="confirm-btn" onClick={handleDelete}>
                Delete
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
