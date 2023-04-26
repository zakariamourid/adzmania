import React from "react";
import facebookLogo from "../assets/Logo/facebookLogo.svg";
import instagramLogo from "../assets/Logo/instagramLogo.svg";
import tiktokLogo from "../assets/Logo/tiktokLogo.svg";
import GoogleLogo from "../assets/Logo/GoogleLogo.svg";
import SnapchatLogo from "../assets/Logo/snapchatLogo.svg";
import { useTable } from "react-table";
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

const OrdersTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Order id",
        accessor: "order_id",
      },
      {
        Header: "Product",
        accessor: "product",
        Cell: ({ value }) => (
          <div className="flex items-center">
            <img
              src={logoLinks[value.toLowerCase()]}
              alt={`${value} logo`}
              className="w-6 h-6 mr-3"
            />
            <span>{value}</span>
          </div>
        ),
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <span
            className={`${statusColors[value.toLowerCase()].bgColor} ${
              statusColors[value.toLowerCase()].textColor
            } font-medium p-2 rounded-xl`}
          >
            {value}
          </span>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: orders });

  return (
    <div className=" bg-white p-4 rounded-md orders-section mt-12">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table {...getTableProps()} className="min-w-full">
                <thead className="bg-white border-b">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          className="text-sm font-bold  px-6 py-4 text-left"
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr
                        {...row.getRowProps()}
                        className={
                          row.index % 2 === 0
                            ? "bg-red-50  border-b"
                            : " bg-white border-b"
                        }
                      >
                        {row.cells.map((cell) => (
                          <td
                            {...cell.getCellProps()}
                            className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900  font-bold"
                          >
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
