import { useNavigate } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  const navigate = useNavigate();
  const goBackLogin = () => {
    alert("Signed Out!");
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };
  const goBackHome = () => {
    navigate("/employee");
  };
  return (
    <div className="main-body">
      <div className="items" onClick={goBackHome}>
        <img className="sidebar_img" src="/src/assets/images/icon.svg" alt="" />
        <div className="sidebar_text">Employee List</div>
      </div>
      <div
        className="items"
        style={{ backgroundColor: "maroon" }}
        onClick={goBackLogin}
      >
        {/* <img className="sidebar_img" src="/src/assets/images/icon.svg" alt="" /> */}
        <div className="sidebar_text">Log Out</div>
      </div>
    </div>
  );
};
