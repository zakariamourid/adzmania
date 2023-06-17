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
import NewOrder from "./Views/NewOrder.jsx";
import Settings from "./Views/Settings.jsx";
import AdminLayout from "./Components/AdminLayout/AdminLayout.jsx";
import AdminDashboard from "./Components/AdminLayout/AdminDashboard.jsx";
import AdminOrders from "./Components/AdminLayout/AdminOrders.jsx";
import AdminUsers from "./Components/AdminLayout/AdminUsers.jsx";

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
      {
        path: "/new-order",
        element: <NewOrder />,
      },
      {
        path: "/settings",
        element: <Settings />,
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
      {
        path: "/home",
        element: <App />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard-admin" />,
      },
      {
        path: "/dashboard-admin",
        element: <AdminDashboard />,
      },
      {
        path: "/orders-admin",
        element: <AdminOrders />,
      },
      {
        path: "/users-admin",
        element: <AdminUsers />,
      },
      {
        path: "/settings-admin",
        element: <Settings />,
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
