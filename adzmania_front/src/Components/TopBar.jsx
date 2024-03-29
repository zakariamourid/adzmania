import React from "react";
import { useState, useEffect } from "react";
import { useStateContext } from "../Contexts/ContextProvider.jsx";
import LogoCenter from "../assets/logoCenter.png";
import DropDownMenu from "./DropDownMenu.jsx";
import { SunIcon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/20/solid";
import { Navigate } from "react-router-dom";

function TopBar() {
  const handleUserIconClick = () => {
    console.log("hello");
  };
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const { user } = useStateContext();
  const [content, setContent] = useState("");
  useEffect(() => {
    if (user) {
      setContent(user.firstName);
    } else {
      setContent("Guest");
    }
  }, [user]);

  return (
    <div className="top-bar  dark:bg-primary_dark_bg">
      <div>
        <img src={LogoCenter} className="w-40 h-24" alt="" />
      </div>
      <div className="flex align-center ">
        <div className=" inline-flex items-center  mr-2 group ">
          <div className=" border border-white  dark:border-bg-primary_dark_bg  dark:hover:border-black hover:border-gray-300 p-2 rounded-lg cursor-pointer">
            {" "}
            {theme === "light" ? (
              <SunIcon
                className="w-6 h-6 text-gray-900"
                onClick={() => setTheme("dark")}
              />
            ) : (
              <MoonIcon
                className="w-6 h-6 text-white dark:hover:text-black"
                onClick={() => setTheme("light")}
              />
            )}
          </div>
          <span className="ml-4">Hey,</span>{" "}
          <span className=" font-bold dark:text-white">{content}</span>
        </div>
        <div className="drop-down-menu">
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
