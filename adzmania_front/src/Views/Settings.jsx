import React, { useEffect } from "react";
import {
  ContextProvider,
  useStateContext,
} from "../Contexts/ContextProvider.jsx";
// import eye icon from heroicons
import { EyeIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { axiosClient } from "../axios";
function Settings() {
  const { user, token } = useStateContext();
  const saveUser = async () => {
    try {
      const res = await axiosClient.put(
        "/api/user",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          old_password: formData.oldPassword,
          new_password: formData.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);

      notify();
    } catch (error) {
      console.error(error);
    }
  };

  const notify = () =>
    toast.success("user has been succecfully updated", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    oldPassword: "",
    newPassword: "",
  });
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        oldPassword: "",
        newPassword: "",
      });
    }
  }, [user]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return !user ? (
    <div className="container p-10">
      <div className="text-3xl font-bold mb-8 ">Account Settings</div>
      <div className="   rounded-lg px-12 py-4 ">
        <div className="mt-8">
          <div className="text-xl font-semibold">Account Information</div>
        </div>
        <div className="mt-4 w-full">"fetching the data."</div>
      </div>
    </div>
  ) : (
    <div className="container p-10">
      <div className="text-3xl font-bold mb-8 ">Account Settings</div>
      <div className=" bg-white dark:bg-primary_dark_bg rounded-lg px-12 py-4">
        <div className="mt-8">
          <div className="text-xl font-semibold dark:text-white">
            Account Information
          </div>
        </div>
        <div className="mt-4 w-full">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2  px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="first_name"
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="last_name"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="grid-last-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="email"
                  readOnly
                  defaultValue={formData.email}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6" id="phone">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  type="tel"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div
                className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                id="old_password"
              >
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white "
                  htmlFor="old_password"
                >
                  old Password
                </label>
                <div className="relative">
                  {" "}
                  <input
                    className="appearance-none block w-full bg-gray-200 border-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="old_password"
                    name="oldPassword"
                    type="password"
                    placeholder="****************"
                    onChange={handleChange}
                    value={formData.oldPassword}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <EyeIcon className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="new_password"
                >
                  New Password
                </label>
                <input
                  className="appearance-none block w-full border-gray-200 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="new_password"
                  name="newPassword"
                  type="password"
                  placeholder="****************"
                  onChange={handleChange}
                  value={formData.newPassword}
                />
              </div>

              {/* add submit button  */}
              <div className="w-full md:w-1/2 px-3 mt-4">
                <button
                  className=" bg-main_red hover:bg-second_red  hover:scale-110   text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={saveUser}
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
