import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
function cards() {
  return (
    <div className="cards-section">
      <div className="section-header">
        <h1 className="dark:text-white text-3xl font-bold">Dashboard</h1>
        <button>
          <Link
            to="/new-order"
            className="flex justify-between items-center  w-40"
          >
            <PlusIcon className="w-7 h-7" /> New Order
          </Link>
        </button>
      </div>
      <div className="cards">
        <div className="card dark:bg-dark_cards">
          <div className="card-header">
            <h2 className="card-header-name dark:text-white">All Orders</h2>
          </div>
          <div className="card-body">
            <p className="card-body-text dark:text-white">5</p>
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
            <p className="card-body-tex dark:text-white">1</p>
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
            <p className="card-body-text dark:text-white">2</p>
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
            <p className="card-body-text dark:text-white">2</p>
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
