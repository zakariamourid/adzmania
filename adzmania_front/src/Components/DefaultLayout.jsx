import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import {
  ContextProvider,
  useStateContext,
} from "../Contexts/contextProvider.jsx";
import SideBar from "./SideBar.jsx";
function DefaultLayout() {
  const { user, token } = useStateContext(ContextProvider);
  if (!token) return <Navigate to="/login" />;
  return (
    <div className="defaultLayout">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
