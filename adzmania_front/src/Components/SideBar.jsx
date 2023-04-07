import React from "react";
import Logo from "../assets/logo-adzmania.svg";
import { HomeIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div class="logo-details  flex justify-center">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="nav-links text-black">
        <li className="nav-link active-link">
          <Link to="/dashboard">
            <HomeIcon className="h-6 w-6 " />
            <span className="links_name ">Dashboard</span>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/new-order">
            <PlusIcon className="h-6 w-6" />
            <span className="links_name">New Order</span>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/orders">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="links_name">Orders</span>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/settings">
            <Cog8ToothIcon className="h-6 w-6" />
            <span className="links_name">Settings</span>
          </Link>
        </li>
      </ul>
      <div className="logout-link nav-link ">
        <Link to="/settings">
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <span className="links_name">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
