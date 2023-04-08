import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function TopBar() {
  return (
    <div className="top-bar">
      <div>topbar</div>
      <div>
        <UserCircleIcon className="w-8 h-8" />
      </div>
    </div>
  );
}

export default TopBar;
