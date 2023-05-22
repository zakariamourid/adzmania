import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../Contexts/contextProvider.jsx";
import SideBar from "./SideBar.jsx";
import TopBar from "./TopBar.jsx";
import { ToastContainer } from "react-toastify";
// import { useAuthContext, AuthProvider } from "../Contexts/AuthContext.jsx";
function DefaultLayout() {
  // const { token } = useStateContext();
  const { token, user } = useStateContext();

  // if (user.name === "") return <Navigate to="/login" />;
  // if (!user) return <Navigate to="/dashboard" />;
  // create a loading overlay
  if (!token) return <Navigate to="/home" />;
  if (user && user.role === "admin") return <Navigate to="/dashboard-admin" />;

  return (
    <>
      {" "}
      <div className="defaultLayout h-full">
        <SideBar />
        <div className="home-section dark:bg-black h-full">
          <TopBar />
          <Outlet />
        </div>
      </div>
      <div className=" absolute right-0 bottom-0  z-50">
        <ToastContainer />
        {/* Adjust position and autoClose duration */}
      </div>
    </>
  );
}

export default DefaultLayout;
