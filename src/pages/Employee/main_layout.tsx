import { Sidebar } from "./props/sidebar";
import "./create_employee.css";
import { Navigate, Outlet } from "react-router-dom";

export const MainLayout = () => {
  const token = localStorage.getItem("isLoggedIn");
  if (token === "false") {
    return <Navigate to="/login" />;
  }
  return (
    <div className="main">
      <div className="left-div">
        <img className="logo" src="/src/assets/images/kv-logo.png" alt="" />
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};
