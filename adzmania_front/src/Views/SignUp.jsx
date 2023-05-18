import React from "react";
import adzmania from "../assets/logoCenter.png";
import Input from "./order-form/Input";
import { axiosClient } from "../axios";
import { useStateContext } from "../Contexts/contextProvider.jsx";
function SignUp() {
  const { setToken, setUser } = useStateContext();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = React.useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    phone: false,
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleBlur = (e) => {
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, [e.target.name]: true }));
    } else {
      setErrors((prev) => ({ ...prev, [e.target.name]: false }));
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosClient.post("/api/signup", {
        email: formData.email,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
      });
      if (res.status === 200) {
        setToken(res.data.token);
        setUser(res.data.user);
        console.log("user", res.data.user);
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
      if (err.response.status === 422) {
        setErrors((prev) => ({ ...prev, ...err.response.data.errors }));
        return;
      }

      // const errorFields = Object.keys(err.response.data.errors);
      // const newErrors = {};
      // errorFields.forEach((field) => {
      //   newErrors[field] = err.response.data.errors[field][0];
      // });
      // setErrors((prev) => ({ ...prev, ...newErrors }));
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-30 w-auto"
            src={adzmania}
            alt="Your Company"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSignup}>
            <div>
              <div className="mt-2 ">
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  error={errors.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  label={"first name"}
                  autoComplete="name"
                />
              </div>
              <div className="mt-2 ">
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  error={errors.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  label={"last name"}
                  autoComplete="name"
                />
              </div>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  error={errors.email}
                  value={formData.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  label="Email address"
                  autoComplete="email"
                />
              </div>
              <div className="mt-2">
                <Input
                  id="phone"
                  name="phone"
                  error={errors.phone}
                  value={formData.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  label="Phone Number"
                  autoComplete="phone"
                />
              </div>

              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  value={formData.password}
                  error={errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  label={"password"}
                  autoComplete="password"
                />
              </div>
            </div>
            <span className="hidden">errors : </span>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
