import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import {
  ContextProvider,
  useStateContext,
} from "../Contexts/contextProvider.jsx";
import SideBar from "./SideBar.jsx";
import TopBar from "./TopBar.jsx";
function DefaultLayout() {
  const { user, token } = useStateContext(ContextProvider);
  if (!token) return <Navigate to="/login" />;
  return (
    <div className="defaultLayout">
      <TopBar />
      <SideBar />
      <div className="home-section">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
