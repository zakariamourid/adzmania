import React from "react";
import "./dashboard.css";
import Cards from "./cards";
import OrdersTable from "./OrdersTable";
function Dashboard() {
  return (
    <div className="container p-10">
      <Cards />
      <OrdersTable />
    </div>
  );
}
export default Dashboard;
