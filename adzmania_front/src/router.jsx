import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DefaultLayout from "./Components/DefaultLayout.jsx";
import Dashboard from "./Views/Dashboard.jsx";
import GuestLayout from "./Components/GuestLayout.jsx";
import Login from "./Views/Login.jsx";
import SignUp from "./Views/SignUp.jsx";
import { Navigate } from "react-router-dom";
import NotFound from "./Views/NotFound.jsx";
import Orders from "./Views/Orders.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
// {
//     path: "/",
//     element: <DefaultLayout />,
//     children: [
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "/",
//         element: <Navigate to="/dashboard" />,
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <GuestLayout />,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/signup",
//         element: <SignUp />,
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
