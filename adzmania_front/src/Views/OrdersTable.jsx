import React from "react";
import facebookLogo from "../assets/Logo/facebookLogo.svg";
import instagramLogo from "../assets/Logo/instagramLogo.svg";
import tiktokLogo from "../assets/Logo/tiktokLogo.svg";
import GoogleLogo from "../assets/Logo/GoogleLogo.svg";
import SnapchatLogo from "../assets/Logo/snapchatLogo.svg";
function OrdersTable() {
  const logoLinks = {
    facebook: facebookLogo,
    tiktok: tiktokLogo,
    instagram: instagramLogo,
    google: GoogleLogo,
    snapchat: SnapchatLogo,
  };
  const orders = [
    {
      order_id: "#20462",
      product: "Facebook",
      date: "13/05/2022",
      amount: "$4.95",
      payment_mode: "Cih Bank",
      status: "Delivered",
    },
    {
      order_id: "#18933",
      product: "Tiktok",
      date: "22/05/2022",
      amount: "$8.95",
      payment_mode: "Paypal",
      status: "Delivered",
    },
    {
      order_id: "#45169",
      product: "Facebook",
      date: "15/06/2022",
      amount: "$1,149.95",
      payment_mode: "Cih Bank",
      status: "Process",
    },
    {
      order_id: "#34304",
      product: "Instagram",
      date: "06/09/2022",
      amount: "$899.95",
      payment_mode: "Wise",
      status: "Pending",
    },
  ];
  const statusColors = {
    delivered: {
      bgColor: "bg-st_delivered_bg",
      textColor: "text-st_delivered_text",
    },
    process: {
      bgColor: "bg-st_process_bg",
      textColor: "text-st_process_text",
    },
    pending: {
      bgColor: "bg-st_pending_bg",
      textColor: "text-st_pending_text",
    },
  };

  return (
    <div className=" bg-white  dark:bg-primary_dark_bg p-4 rounded-md orders-section  ">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full ">
                <thead className="bg-white border-b dark:bg-primary_dark_bg dark:text-white">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      Order id
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold px-6 py-4 text-left"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="text-sm  font-bold  px-6 py-4 text-left"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      className={
                        index % 2 === 0
                          ? "bg-red-50   dark:bg-primary_dark_bg "
                          : " bg-white    dark:bg-dark_cards"
                      }
                      key={order.order_id}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-white  text-gray-900  font-bold">
                        {order.order_id}
                      </td>
                      <td className="text-sm text-gray-900 dark:text-white font-light px-6 py-4 whitespace-nowrap flex items-center">
                        <img
                          src={logoLinks[order.product.toLowerCase()]}
                          className="w-6 h6 mr-3"
                        />
                        <span>{order.product}</span>
                      </td>
                      <td className="text-sm text-gray-900 dark:text-white font-light px-6 py-4 whitespace-nowrap">
                        {order.date}
                      </td>
                      <td className="text-sm text-gray-900 dark:text-white font-light px-6 py-4 whitespace-nowrap">
                        {order.amount}
                      </td>
                      <td className="text-sm text-gray-900 dark:text-white font-light px-6 py-4 whitespace-nowrap ">
                        <span
                          className={`${
                            statusColors[order.status.toLowerCase()].bgColor
                          } ${
                            statusColors[order.status.toLowerCase()].textColor
                          } font-medium p-2 rounded-xl`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrdersTable;
