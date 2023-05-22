import React from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { useStateContext } from "../../Contexts/contextProvider";
import GlobalFiltering from "../../Views/GlobalFiltering";
const UsersTable = () => {
  const { users } = useStateContext();
  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
    ],
    []
  );
  const data = React.useMemo(() => users, [users]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    state,
  } = useTable(
    {
      columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { globalFilter } = state;
  const handleFilterChange = (e) => {
    const value = e.target.value || "";
    setGlobalFilter(value.toLowerCase());
  };
  return (
    <>
      <div className="bg-white p-4 rounded-md dark:bg-primary_dark_bg">
        <div className="flex flex-col">
          <GlobalFiltering
            handleFilterChange={handleFilterChange}
            globalFilter={globalFilter}
            selectFilter={false}
          />
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <table {...getTableProps()} className="min-w-full">
                {/* <thead className="bg-white border-b dark:bg-primary_dark_bg dark:text-white">
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
                </thead> */}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
