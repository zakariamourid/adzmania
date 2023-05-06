import React from "react";
import adzmaina from "../assets/logoCenter.png";
import Input from "./order-form/Input";
import { axiosClient } from "../axios";
import useAuthContext from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  const { getUser, setUser } = useAuthContext();

  const [isInvalid, setIsInvalid] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.toLowerCase(),
    }));
  };
  const handleBlur = (e) => {
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, [e.target.name]: true }));
    } else {
      setErrors((prev) => ({ ...prev, [e.target.name]: false }));
    }
  };
  const submitLogin = async (e) => {
    e.preventDefault();
    setIsInvalid(false);

    // check if the form is valid
    const { email, password } = formData;
    if (!email || !password) {
      setErrors({
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
      const csrf = await axiosClient.get("sanctum/csrf-cookie");
      const res = await axiosClient.post("/api/login", {
        email: formData.email,
        password: formData.password,
      });
      if (res.status === 200) {
        console.log(res.data.name);
        setUser({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      setIsInvalid(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-30 w-auto"
            src={adzmaina}
            alt="Your Company"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitLogin}>
            <div className="mt-2">
              <button onClick={getUser}> get user </button>
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
            {isInvalid && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">Incorrect email or password</span>
              </div>
            )}

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
