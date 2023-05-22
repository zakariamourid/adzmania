import React from "react";

const GlobalFiltering = ({
  handleFilterChange,
  globalFilter,
  selectFilter,
}) => {
  //   const { filterValue, setFilter } = column;
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={globalFilter || ""}
          className="border border-gray-300 rounded-md p-2 mr-2"
          onChange={handleFilterChange}
        />
        <button className="bg-red-500 text-white rounded-md py-2 px-4">
          Search
        </button>
      </div>
      {selectFilter && (
        <div>
          <label className="mr-2">Filter:</label>
          <select className="border border-gray-300 rounded-md p-2">
            <option value="">All</option>
            <option value="completed">delivered</option>
            <option value="pending">Pending</option>
            <option value="pending">Process</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default GlobalFiltering;
