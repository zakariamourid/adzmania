import React from "react";
import { useState } from "react";
import Logo from "../../assets/logo-adzmania.svg";
import { HomeIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/20/solid";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../../Contexts/contextProvider";

const AdminSideBar = () => {
  const location = useLocation();
  // const { logout } = useStateContext();
  const isActive = (path) => location.pathname === path;
  const handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    window.location.reload();
  };

  return (
    <div className="sidebar bg-tb  left-72 md:left-0">
      <div className="logo-details  flex justify-center">
        <Link to="/dashboard">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="hamburger absolute right-9 top-9">
        {/* <HandThumbUpIcon className="w-6 h-6 text-red-400" /> */}
      </div>
      <ul className="nav-links text-black">
        <li
          className={`nav-link ${
            isActive("/dashboard-admin") ? "active-link" : ""
          }`}
        >
          <Link to="/dashboard-admin">
            <HomeIcon className="h-6 w-6 " />
            <span className="links_name ">Dashboard</span>
          </Link>
        </li>

        <li
          className={`nav-link ${
            isActive("/orders-admin") ? "active-link" : ""
          }`}
        >
          <Link to="/orders-admin">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="links_name">Orders</span>
          </Link>
        </li>
        <li
          className={`nav-link ${
            isActive("/users-admin") ? "active-link" : ""
          }`}
        >
          <Link to="/users-admin">
            <UsersIcon className="h-6 w-6" />
            <span className="links_name">Users</span>
          </Link>
        </li>
        <li
          className={`nav-link ${
            isActive("/settings-admin") ? "active-link" : ""
          }`}
        >
          <Link to="/settings-admin">
            <Cog8ToothIcon className="h-6 w-6" />
            <span className="links_name">Settings</span>
          </Link>
        </li>

        {/* aaaa */}
      </ul>
      <div className="logout-link nav-link ">
        <a onClick={handleLogout} className="cursor-pointer">
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <span className="links_name">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default AdminSideBar;
