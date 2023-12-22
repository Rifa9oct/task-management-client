import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateTask from "../pages/Dashboard/CreateTask";
import UpdateTask from "../pages/Dashboard/UpdateTask";
import Dashboard from "../Layout/Dashboard/Dashboard";
import ManageTask from "../pages/Dashboard/ManageTask";
import PrivateRoute from "../Routes/PrivateRoute"
import About from "../pages/AboutUs/About";
import Contact from "../pages/Contact/Contact";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/aboutus",
          element: <About></About>
        },
        {
          path:"/contact",
          element: <Contact></Contact>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path:"/register",
          element: <Register></Register>
        }
      ]
    },
    {
      path:"dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:"createTask",
          element: <CreateTask></CreateTask>
        },
        {
          path:"updateTask",
          element: <UpdateTask></UpdateTask>
        },
        {
          path:"manageTask",
          element: <ManageTask></ManageTask>
        }
      ]
    },
  ]);

  export default router;