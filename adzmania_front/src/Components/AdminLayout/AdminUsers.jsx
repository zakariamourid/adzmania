import React from "react";
import UsersTable from "./UsersTable";

const AdminUsers = () => {
  return (
    <div className="container p-10 pt-16">
      <div className=" font-bold text-3xl  capitalize dark:text-white mb-5">
        {" "}
        Users
      </div>
      <UsersTable />
    </div>
  );
};

export default AdminUsers;
