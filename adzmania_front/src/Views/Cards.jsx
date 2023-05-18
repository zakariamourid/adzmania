import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useStateContext } from "../Contexts/contextProvider.jsx";

import "react-toastify/dist/ReactToastify.css";

function cards() {
  const { orders, user } = useStateContext();

  const pendingOrders = orders.filter(
    (order) => order.status === "pending"
  ).length;
  const deliveredOrders = orders.filter(
    (order) => order.status === "delivered"
  ).length;
  const processOrders = orders.filter(
    (order) => order.status === "process"
  ).length;

  return (
    <div className="cards-section">
      <div className="section-header">
        <h1 className="dark:text-white text-3xl font-bold">Dashboard</h1>
        <button>
          <Link
            to={user && user.role === "admin" ? "/orders-admin" : "/new-order"}
            className="flex justify-between items-center  w-40"
          >
            {user && user.role === "admin" ? (
              <ShoppingCartIcon className="w-6 h-6" />
            ) : (
              <PlusIcon className="w-6 h-6" />
            )}
            {user && user.role === "admin" ? "All Orders" : "New Order"}
            {/* </Link> */}
          </Link>
        </button>
      </div>
      <div className="cards">
        <div className="card dark:bg-dark_cards">
          <div className="card-header">
            <h2 className="card-header-name dark:text-white">All Orders</h2>
          </div>
          <div className="card-body">
            <p className="card-body-text dark:text-white">{orders.length}</p>
            <div className="card-icon">
              <ArchiveBoxIcon className="w-12 h-10" />
            </div>
          </div>
        </div>{" "}
        <div className="card dark:bg-dark_cards">
          <div className="card-header">
            <h2 className="card-header-name dark:text-white">Pending</h2>
          </div>
          <div className="card-body">
            <p className="card-body-tex dark:text-white">{pendingOrders}</p>
            <div className="card-icon">
              <ClockIcon className="w-12 h-10" />
            </div>
          </div>
        </div>{" "}
        <div className="card dark:bg-dark_cards">
          <div className="card-header">
            <h2 className="card-header-name dark:text-white">Process</h2>
          </div>
          <div className="card-body">
            <p className="card-body-text dark:text-white">{processOrders}</p>
            <div className="card-icon">
              <ArrowPathRoundedSquareIcon className="w-12 h-10" />
            </div>
          </div>
        </div>
        <div className="card dark:bg-dark_cards">
          <div className="card-header">
            <h2 className="card-header-name dark:text-white">Completed</h2>
          </div>
          <div className="card-body">
            <p className="card-body-text dark:text-white">{deliveredOrders}</p>
            <div className="card-icon">
              <CheckCircleIcon className="w-12 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cards;
