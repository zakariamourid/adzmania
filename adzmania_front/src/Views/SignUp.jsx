import React from "react";
import adzmania from "../assets/logoCenter.png";
import Input from "./order-form/Input";
import { axiosClient } from "../axios";
import {
  ContextProvider,
  useStateContext,
} from "../Contexts/contextProvider.jsx";
function SignUp() {
  const { setToken, setUser } = useStateContext(ContextProvider);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    password: false,
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
    // check if the form is valid
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      setErrors({
        name: !name,
        email: !email,
        password: !password,
      });
      return;
    }
    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      // check if the email matches the regular expression
      setErrors((prev) => ({
        ...prev,
        email: "make sure your email is correct",
      }));
      return;
    }

    try {
      const res = await axiosClient.post("signup", formData);
      console.log(res.data.user);
      setUser((prev) => ({
        ...prev,
        name: res.data.user.name,
        email: res.data.user.email,
      }));
      setToken(res.data.token);
    } catch (err) {
      // Handle the API error and set the error message for each input field
      const errorFields = Object.keys(err.response.data.errors);
      const newErrors = {};
      errorFields.forEach((field) => {
        newErrors[field] = err.response.data.errors[field][0];
      });
      setErrors((prev) => ({ ...prev, ...newErrors }));
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
                  id="name"
                  name="name"
                  value={formData.name}
                  error={errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  label={"name"}
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
