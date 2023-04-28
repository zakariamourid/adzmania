import React from "react";
import metaLogo from "../assets/Logo/metaLogo.svg";
import tiktokLogo from "../assets/Logo/tiktokLogo.svg";
import GoogleLogo from "../assets/Logo/GoogleLogo.svg";
import SnapchatLogo from "../assets/Logo/snapchatLogo.svg";
import { useTable } from "react-table";
import { orders, statusColors } from "./Data";

const OrdersTable = () => {
  const logoLinks = {
    meta: metaLogo,
    tiktok: tiktokLogo,
    google: GoogleLogo,
    snapchat: SnapchatLogo,
  };
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
    <div className=" bg-white p-4 rounded-md  dark:bg-primary_dark_bg">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <button className="bg-red-500 text-white rounded-md py-2 px-4">
              Search
            </button>
          </div>
          <div>
            <label className="mr-2">Filter:</label>
            <select className="border border-gray-300 rounded-md p-2">
              <option value="">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table {...getTableProps()} className="min-w-full">
                <thead className="bg-white border-b dark:bg-primary_dark_bg dark:text-white">
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
                            ? "bg-red-50   dark:bg-primary_dark_bg "
                            : " bg-white    dark:bg-dark_cards"
                        }
                      >
                        {row.cells.map((cell) => (
                          <td
                            {...cell.getCellProps()}
                            className="px-6 py-4 whitespace-nowrap text-sm  dark:text-white text-gray-900  font-bold"
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
