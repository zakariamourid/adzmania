import React from "react";
import { useEffect } from "react";
import adzmania from "../assets/logoCenter.png";
import Input from "../Views/Input";
import { axiosClient } from "../axios";
import { useStateContext } from "../Contexts/contextProvider.jsx";
import { useNavigate, Link } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  const { setUser, user, setToken, token } = useStateContext();
  // useEffect(() => {
  //   setUser({ name: "mohamed", email: "zak@gmao.c", phone: "123456789" });
  // }, []);

  const [isInvalid, setIsInvalid] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
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
    setIsInvalid(false);
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
    // setIsInvalid(false);

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

    // const res = await axiosClient.post("/api/login", {
    //   email: formData.email,
    //   password: formData.password,
    // });
    setIsLoading(true);
    try {
      const res = await axiosClient.post("/api/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log(res);
      setUser(res.data.user);
      setToken(res.data.token);
      console.log("token : ", res.data.token);
    } catch (error) {
      console.log("error : ", error.name);
      console.error("error : ", error.response);
      console.error("error.message : ", error.response.data.message);
      setIsInvalid(true);
      return;
    } finally {
      setIsLoading(false);
    }

    // setUser(res.data);
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto  px-4 sm:px-6 lg:px-6 flex justify-between">
          <Link to={"/home"}>
            <img className=" h-20" src={adzmania} alt="Your Company" />
          </Link>
          <div className="flex items-center  ">
            <Link to={"/signup"}>
              <div className="text-center font-bold  cursor-pointer text-white bg-main_red border-red-200   px-5 py-2 rounded-2xl">
                Sign up
              </div>
            </Link>
          </div>
        </div>
      </header>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  mt-32 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-3xl ">
          Welcome Back to <br />
          <span className="  text-main_red font-bold text-4xl">Adzmaina</span>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitLogin}>
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
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                ) : (
                  ""
                )}
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            don't have an account ?{" "}
            <Link to={"/signup"}>
              <span className="text-red-500 font-bold cursor-pointer">
                Sign up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
