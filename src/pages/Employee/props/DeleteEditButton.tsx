import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { type Employee } from "../../../store/employee/employee.types";

import { useDeleteEmpMutation } from "../../../api-services/employees/employee.api";

export const DeleteEditButton = ({
  id,
  name,
  object,
}: {
  id: string;
  name: string;
  object: Employee;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const newEmployees = useAppSelector((state) => state.employee.employees);
  // const found = newEmployees.find((emp: any) => emp.employeeId === id);

  const goToEdit = () => {
    console.log("Passing object from employee details edit button: 0", object);
    navigate("/employee/" + id + "/edit", { state: object });
  };

  const [deleteEmp] = useDeleteEmpMutation();

  const handleDelete = () => {
    setShowModal(false);

    const response = deleteEmp({ id });
    // if (found) dispatch(deleteEmployee(found));
    // dispatch({
    //   type: EMPLOYEE_ACTION_TYPES.DELETE,
    //   payload: found,
    // });

    navigate("/employee");
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
          onClick={goToEdit}
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
