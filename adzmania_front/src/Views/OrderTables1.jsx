import React, { useState, useEffect } from "react";
import metaLogo from "../assets/Logo/metaLogo.svg";
import tiktokLogo from "../assets/Logo/tiktokLogo.svg";
import GoogleLogo from "../assets/Logo/GoogleLogo.svg";
import SnapchatLogo from "../assets/Logo/snapchatLogo.svg";
import { useTable, useSortBy, useFilters } from "react-table";
import { getOrders, statusColors } from "./Data";
import { useStateContext } from "../Contexts/contextProvider.jsx";
import GlobalFiltering from "./GlobalFiltering";
import { format } from "date-fns";

const OrdersTable = () => {
  const { orders } = useStateContext();
  // const [orders, setOrders] = useState([]);
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
  // if (!orders || orders.length === 0) {
  //   return <div>Loading...</div>;
  // }
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
        accessor: "id",
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
        Cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
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
    useTable({ columns, data: orders }, useSortBy);

  return (
    <div className=" bg-white p-4 rounded-md  dark:bg-primary_dark_bg">
      <div className="flex flex-col">
        <GlobalFiltering />
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table {...getTableProps()} className="min-w-full">
                <thead className="bg-white border-b dark:bg-primary_dark_bg dark:text-white">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          className="text-sm font-bold  px-6 py-4 text-left"
                        >
                          {column.render("Header")}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " 🔽"
                                : " 🔼"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                {/* add conditon if there is no orders */}
                {rows.length === 0 && (
                  <tbody>
                    <tr>
                      <td
                        colSpan="5"
                        className="text-center text-gray-500 py-4"
                      >
                        No orders found
                      </td>
                    </tr>
                  </tbody>
                )}
                {/* add conditon if there is no orders */}
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
