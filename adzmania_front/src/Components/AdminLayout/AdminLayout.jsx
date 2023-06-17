import React from "react";
import { Outlet } from "react-router-dom";
import { useStateContext } from "../../Contexts/ContextProvider";
import { Navigate } from "react-router-dom";
import AdminSidebar from "../AdminLayout/AdminSidebar";
import TopBar from "../TopBar";
const AdminLayout = () => {
  const { token, user } = useStateContext();
  if (!token) return <Navigate to="/login" />;
  if (user && user.role === "user") return <Navigate to="/dashboard" />;

  return (
    <div>
      <AdminSidebar />

      <div className="home-section dark:bg-black h-full">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
