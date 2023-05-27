import React from "react";
import OrdersTable from "./OrderTables";

function Orders() {
  return (
    <div className="container p-10 pt-16">
      <div className=" font-bold text-3xl  capitalize dark:text-white mb-5">
        {" "}
        all orders Table
      </div>
      <OrdersTable />
    </div>
  );
}

export default Orders;
