import React from "react";
import {
  ContextProvider,
  useStateContext,
} from "../Contexts/contextProvider.jsx";
// import eye icon from heroicons
import { EyeIcon } from "@heroicons/react/24/outline";
function Settings() {
  const { user } = useStateContext();

  return !user ? (
    <div className="container p-10">
      <div className="text-3xl font-bold mb-8 ">Account Settings</div>
      <div className=" bg-white rounded-lg px-12 py-4">
        <div className="mt-8">
          <div className="text-xl font-semibold">Account Information</div>
        </div>
        <div className="mt-4 w-full">"fetching the data."</div>
      </div>
    </div>
  ) : (
    <div className="container p-10">
      <div className="text-3xl font-bold mb-8 ">Account Settings</div>
      <div className=" bg-white rounded-lg px-12 py-4">
        <div className="mt-8">
          <div className="text-xl font-semibold">Account Information</div>
        </div>
        <div className="mt-4 w-full">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2  px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="first_name"
                  type="text"
                  value={user.name}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="last_name"
                  type="text"
                  value={user.lastName}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  readOnly
                  defaultValue={user.email}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6" id="phone">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  type="tel"
                  value={user.phone}
                />
              </div>
              <div
                className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                id="old_password"
              >
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="old_password"
                >
                  old Password
                </label>
                <div className="relative">
                  {" "}
                  <input
                    className="appearance-none block w-full bg-gray-200 border-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="old_password"
                    type="password"
                    placeholder="****************"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <EyeIcon className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="new_password"
                >
                  New Password
                </label>
                <input
                  className="appearance-none block w-full border-gray-200 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="new_password"
                  type="password"
                  placeholder="****************"
                />
              </div>

              {/* add submit button  */}
              <div className="w-full md:w-1/2 px-3 mt-4">
                <button
                  className=" bg-main_red hover:bg-second_red  hover:scale-110   text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
