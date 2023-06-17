import React from "react";
import Cards from "../../Views/Cards";
import OrdersTable from "../../Views/OrderTables";
const AdminDashboard = () => {
  return (
    <div className="container p-10 mx-auto">
      <Cards />
      <OrdersTable />
    </div>
  );
};

export default AdminDashboard;
