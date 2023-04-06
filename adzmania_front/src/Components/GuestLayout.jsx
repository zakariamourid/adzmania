import React from "react";
import { Outlet } from "react-router-dom";
import {
  ContextProvider,
  useStateContext,
} from "../Contexts/contextProvider.jsx";
import { Navigate } from "react-router-dom";
function GuestLayout() {
  const { token } = useStateContext(ContextProvider);
  if (token) return <Navigate to="/dashboard" />;

  return (
    <div className="bg-green-500 text-black">
      GuestLayout
      <div className="bg-green-300">
        <Outlet />
      </div>
    </div>
  );
}

export default GuestLayout;
