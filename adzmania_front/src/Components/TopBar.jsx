import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import {
  ContextProvider,
  useStateContext,
} from "../Contexts/contextProvider.jsx";
import LogoCenter from "../assets/logoCenter.png";
import DropDownMenu from "./DropDownMenu.jsx";

function TopBar() {
  const handleUserIconClick = () => {
    console.log("hello");
  };
  const { user } = useStateContext(ContextProvider);
  return (
    <div className="top-bar">
      <div>
        <img src={LogoCenter} class="w-40 h-24" alt="" />
      </div>
      <div className="flex align-center ">
        <div className=" inline-flex items-center  mr-2">
          Hey, <span className=" font-bold ">{user.name}</span>
        </div>
        <div className="drop-down-menu">
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
