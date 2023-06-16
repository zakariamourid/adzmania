import React from "react";
import adzmania from "../assets/logoCenter.png";
import Input from "./Input";
import { axiosClient } from "../axios";
import { useStateContext } from "../Contexts/contextProvider.jsx";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function SignUp() {
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  const lng = navigator.language;
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
      <header className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto  px-4 sm:px-6 lg:px-6 flex justify-between">
          <Link to={"/home"}>
            <img className=" h-20" src={adzmania} alt="Adzmania" />
          </Link>
          <div className="flex items-center">
            <Link to={"/login"}>
              <div className="text-center font-bold  cursor-pointer text-white bg-main_red border-red-200   px-5 py-2 rounded-2xl">
                Login
              </div>
            </Link>
          </div>
        </div>
      </header>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 mt-20 lg:px-8  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm text-3xl ">
            Welcome to <br />
            <span className="  text-main_red font-bold text-4xl">Adzmaina</span>
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSignup}>
            <div>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1">
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    error={errors.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    label={"First Name"}
                    autoComplete="name"
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    error={errors.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    label={"Last Name"}
                    autoComplete="name"
                  />
                </div>
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
          <div className="mt-6 text-center">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-red-500 font-bold cursor-pointer">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
