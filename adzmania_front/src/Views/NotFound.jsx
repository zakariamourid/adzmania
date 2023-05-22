import React, { useEffect, useState } from "react";
import { getOrders } from "./Data";
import { useStateContext } from "../Contexts/contextProvider.jsx";
function NotFound() {
  // const [orders, setOrders] = useState([]);
  const { orders, user, users } = useStateContext();

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const ordersData = await getOrders();
  //       setOrders(ordersData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchData();
  // }, []);
  return (
    <div>
      {/* {JSON.stringify(orders)}
      {JSON.stringify(user)} */}
      {JSON.stringify(users)}
      <p>{"hello"}</p>
    </div>
  );
}

export default NotFound;
