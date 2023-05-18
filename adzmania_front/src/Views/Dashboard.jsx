import React from "react";
import "../index.css";
import Cards from "./cards";
import OrdersTable from "./OrderTables1";
function Dashboard() {
  return (
    <div className="container p-10 mx-auto">
      <Cards />
      <OrdersTable />
    </div>
  );
}
export default Dashboard;
