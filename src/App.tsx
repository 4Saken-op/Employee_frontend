import { Login } from "./pages/login/Login";
import "./index.css";
import { CreateEmployee } from "./pages/create_Employee/create_employee";
//import UncontrolledLogin from "./pages/login/uncontrolled/Uncontroller_Login";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";
// import { SignedInRouter } from "./private_routers/signedinrouter";
import { MainLayout } from "./pages/create_Employee/main_layout";
import { EmployeeDetailsByID } from "./pages/create_Employee/id_emp_details";
import { CreateEmp } from "./pages/create_Employee/create_emp";

const isLoggedIn = () => {
  const token = localStorage.getItem("isLoggedIn");
  return token === "true";
};

const router = createBrowserRouter([
  {
    path: "/",
    element: isLoggedIn() ? (
      <Navigate to="/employee" />
    ) : (
      <Navigate to="/login" />
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/employee",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <CreateEmp />,
      },
      {
        path: "create",
        element: <CreateEmployee />,
      },
      {
        path: ":id",
        element: <EmployeeDetailsByID />,
      },
      {
        path: ":id/edit",
        element: <CreateEmployee />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
