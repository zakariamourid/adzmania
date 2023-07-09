import React, { useState, useEffect } from "react";
import metaLogo from "../assets/Logo/metaLogo.svg";
import tiktokLogo from "../assets/Logo/tiktokLogo.svg";
import GoogleLogo from "../assets/Logo/GoogleLogo.svg";
import { axiosClient } from "../axios";
import { TrashIcon } from "@heroicons/react/24/outline";
import SnapchatLogo from "../assets/Logo/snapchatLogo.svg";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { statusColors } from "./Data";
import { useStateContext } from "../Contexts/ContextProvider.jsx";
import GlobalFiltering from "./GlobalFiltering";
import { format, set } from "date-fns";
import { ca, ro } from "date-fns/locale";
import EditModal from "../Components/AdminLayout/EditModal";
import DeleteModal from "../Components/AdminLayout/DeleteModal";

const OrdersTable = () => {
  const { token } = useStateContext();
  const handleSave = async () => {
    const updateData = {
      product: order.product,
      amount: order.amount,
      status: order.status,
      paymnet_mode: order.paymnet_mode,
    };
    const res = await axiosClient.put(
      "/api/admin/orders/" + order.id,
      {
        ...updateData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 200) {
      setIsOpen(false);
      window.location.reload();
    }
  };
  const handleDelete = async (id) => {
    const res = await axiosClient.delete("/api/admin/orders/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) {
      setIsOpen(false);
      window.location.reload();
    }
  };

  const [order, setOrder] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModal, setisDeleteModal] = useState(false);

  const { orders, user } = useStateContext();

  const logoLinks = {
    meta: metaLogo,
    tiktok: tiktokLogo,
    google: GoogleLogo,
    snapchat: SnapchatLogo,
  };

  const columns = React.useMemo(() => {
    const columnsArray = [
      {
        Header: "Order id",
        accessor: "id",
        Cell: ({ value }) => (
          <span className="text-st_blue font-bold">#{value}</span>
        ),
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
        Cell: ({ value }) => {
          return value + " $";
        },
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
    ];
    if (user && user.role === "admin") {
      columnsArray.push({ Header: "user", accessor: "user_id" });
      columnsArray.push({ Header: "phone", accessor: "phone" });
      columnsArray.push({
        id: "edit",
        Header: "edit",
        Cell: ({ row }) => (
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md disabled:bg-gray-50 disabled:hidden"
            onClick={() => {
              setOrder(row.original);
              setIsOpen(true);
            }}
          >
            Edit
          </button>
        ),
      });
      columnsArray.push({
        id: "view",
        Header: "view",
        Cell: ({ row }) => (
          <button
            className="bg-white  hover:bg-red-600 text-red-400 hover:text-white border-red-600 border px-3 py-1.5 rounded-md disabled:bg-gray-50 disabled:hidden"
            onClick={() => {
              setOrder(row.original);
              setisDeleteModal(true);
            }}
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        ),
      });
    }
    return columnsArray;
  }, [user]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    state,
    initialState,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: orders,
      defaultSortBy: [{ id: "Date", desc: false }],
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex } = state;
  const { globalFilter } = state;
  const handleFilterChange = (e) => {
    const value = e.target.value || "";
    setGlobalFilter(value.toLowerCase()); // Convert the value to lowercase for case-insensitive matching
  };

  return (
    <div className=" bg-white p-4 rounded-md  dark:bg-primary_dark_bg">
      <div className="flex flex-col">
        <GlobalFiltering
          handleFilterChange={handleFilterChange}
          globalFilter={globalFilter}
          selectFilter={true}
        />
        <EditModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          order={order}
          setOrder={setOrder}
          handleSave={handleSave}
        />
        <DeleteModal
          isDeleteModal={isDeleteModal}
          setisDeleteModal={setisDeleteModal}
          handleDelete={handleDelete}
          order={order}
        />
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="">
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
                {page.length === 0 && (
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
                  {page.map((row) => {
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
              <div className="text-center mt-3">
                <div className="">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md mr-2 disabled:bg-gray-50 disabled:hidden"
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-900 dark:text-white">
                    <strong>
                      {pageOptions.map((page) => (
                        <span
                          key={page}
                          className={`cursor-pointer p-3 py-2 mx-2 border rounded-md border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-600 ${
                            pageIndex === page
                              ? " bg-main_red text-white hover:bg-red-100"
                              : ""
                          } `}
                          onClick={() => {
                            gotoPage(page);
                          }}
                        >
                          {page + 1}
                        </span>
                      ))}
                    </strong>{" "}
                  </span>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md disabled:bg-gray-50 disabled:hidden"
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
