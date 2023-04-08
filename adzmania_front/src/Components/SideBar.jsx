import React from "react";
import { useState } from "react";
import Logo from "../assets/logo-adzmania.svg";
import { HomeIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const isActive = (path) => location.pathname === path;
  const handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    window.location.reload();
  };

  return (
    <div className="sidebar">
      <div className="logo-details  flex justify-center">
        <img src={Logo} alt="logo" />
      </div>
      <div className="hamburger absolute right-9 top-9">
        <HandThumbUpIcon className="w-6 h-6 text-red-400" />
      </div>
      <ul className="nav-links text-black">
        <li
          className={`nav-link ${isActive("/dashboard") ? "active-link" : ""}`}
        >
          <Link to="/dashboard">
            <HomeIcon className="h-6 w-6 " />
            <span className="links_name ">Dashboard</span>
          </Link>
        </li>
        <li
          className={`nav-link ${isActive("/new-order") ? "active-link" : ""}`}
        >
          <Link to="/new-order">
            <PlusIcon className="h-6 w-6" />
            <span className="links_name">New Order</span>
          </Link>
        </li>
        <li className={`nav-link ${isActive("/orders") ? "active-link" : ""}`}>
          <Link to="/orders">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="links_name">Orders</span>
          </Link>
        </li>
        <li
          className={`nav-link ${isActive("/settings") ? "active-link" : ""}`}
        >
          <Link to="/settings">
            <Cog8ToothIcon className="h-6 w-6" />
            <span className="links_name">Settings</span>
          </Link>
        </li>
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

export default SideBar;
