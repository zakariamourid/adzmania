import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../Contexts/contextProvider.jsx";
import SideBar from "./SideBar.jsx";
import TopBar from "./TopBar.jsx";
// import { useAuthContext, AuthProvider } from "../Contexts/AuthContext.jsx";
function DefaultLayout() {
  // const { token } = useStateContext();
  const { token } = useStateContext();

  // if (user.name === "") return <Navigate to="/login" />;
  // if (!user) return <Navigate to="/dashboard" />;
  // create a loading overlay
  if (!token) return <Navigate to="/login" />;
  return (
    <div className="defaultLayout h-full">
      <SideBar />
      <div className="home-section dark:bg-black h-full">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
