// import { CreateEmployee } from "./pages/Employee/create_employee";
//import UncontrolledLogin from "./pages/login/uncontrolled/Uncontroller_Login";
// import { SignedInRouter } from "./private_routers/signedinrouter";

import { Login } from "./pages/Login/Login";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/Notfound/NotFound";

import { MainLayout } from "./pages/Employee/main_layout";
import { EmployeeDetailsByID } from "./pages/Employee/id_emp_details";
import { CreateEmp } from "./pages/Employee/create_emp";
import { EmployeeDetails } from "./pages/Employee/emp_details";
import { EditEmp } from "./pages/Employee/Edit";

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
        element: <EmployeeDetails />,
      },
      {
        path: "create",
        element: <CreateEmp />,
      },
      {
        path: ":id",
        element: <EmployeeDetailsByID />,
      },
      {
        path: ":id/edit",
        element: <EditEmp />,
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
