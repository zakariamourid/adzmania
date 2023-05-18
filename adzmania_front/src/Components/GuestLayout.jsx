import React from "react";
import { Outlet } from "react-router-dom";
import {
  ContextProvider,
  useStateContext,
} from "../Contexts/contextProvider.jsx";
import { Navigate } from "react-router-dom";
function GuestLayout() {
  const { token, user } = useStateContext();
  if (user && user.role == "admin") return <Navigate to="/dashboard-admin" />;
  if (token) return <Navigate to="/dashboard" />;
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default GuestLayout;
