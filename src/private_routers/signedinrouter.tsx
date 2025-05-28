import { CreateEmployee } from "../pages/create_Employee/create_employee";
import { Login } from "../pages/login/Login";

export const SignedInRouter = () => {
  const token = localStorage.getItem("isLoggedIn");
  if (token === "true") {
    return <CreateEmployee />;
  } else {
    return <Login />;
  }
};
