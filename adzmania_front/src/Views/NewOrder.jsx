import React, { useState } from "react";
// import { useRef, useEffect } from "react";
import Input from "./Input";
// import facebookLogo from "../assets/Logo/facebookLogo.svg";
// import instagramLogo from "../assets/Logo/instagramLogo.svg";
import tiktokLogo from "../assets/Logo/tiktokLogo.svg";
import GoogleLogo from "../assets/Logo/GoogleLogo.svg";
import SnapchatLogo from "../assets/Logo/snapchatLogo.svg";
import MetaLogo from "../assets/Logo/metaLogo.svg";
import CustomListBox from "./order-form/CustomListBox";
import CihLogo from "./order-form/payment_logo/CihLogo.svg";
import PaypalLogo from "./order-form/payment_logo/PaypalLogo.svg";
import PayoneerLogo from "./order-form/payment_logo/PayonnerLogo.svg";
import WiseLogo from "./order-form/payment_logo/WiseLogo.svg";
import PaymentMethods from "./order-form/PaymentMethods";
import { useNavigate } from "react-router-dom";
import OrderSummary from "./order-form/OrderSummary";
import { axiosClient } from "../axios";
import { useStateContext } from "../Contexts/contextProvider.jsx";
import { toast } from "react-toastify";
import { tr } from "date-fns/locale";

function NewOrder() {
  const notify = () =>
    toast.success("order has been successfully submitted", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const navigate = useNavigate();
  const { token, getOrders } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const handleConfirmOrder = async () => {
    setIsLoading(true);
    try {
      const res = await axiosClient.post(
        "/api/orders",
        {
          product: formData.product,
          price: Math.round(formData.budget * 1.1),
          business_name: formData.businessName,
          contact_name: formData.contactName,
          payment_method: formData.paymentMethod.toLowerCase(),
          email: formData.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      getOrders();
      notify();
      navigate("/orders");
      setIsLoading(false);
    }
  };
  const [errors, setErrors] = useState({
    businessName: false,
    contactName: false,
    contactEmail: false,
    customAmount: false,
  });

  const amounts = [
    { amount: "1000" },
    { amount: "1500" },
    { amount: "2000" },
    { amount: "2500" },
    { amount: "3000" },
    { amount: "custom" },
  ];
  const [selectedAmount, setSelectedAmount] = useState(amounts[0]);
  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount);
    if (amount.amount !== "custom") {
      setFormData((prevState) => ({
        ...prevState,
        budget: amount.amount,
      }));
    }
  };
  const [defaultPaymentMethods, setdefaultPaymentMethods] = useState([
    { name: "Cih", isSelected: true, image: CihLogo },
    { name: "PayPal", isSelected: false, image: PaypalLogo },
    { name: "Payoneer", isSelected: false, image: PayoneerLogo },
    { name: "Wise", isSelected: false, image: WiseLogo },
  ]);
  const handlePaymentItemClick = (index) => {
    const newdefaultPaymentMethods = defaultPaymentMethods.map((item, i) => {
      if (i === index) {
        setFormData((prevState) => ({
          ...prevState,
          paymentMethod: item.name,
        }));
        return { ...item, isSelected: true };
      } else {
        return { ...item, isSelected: false };
      }
    });
    setdefaultPaymentMethods(newdefaultPaymentMethods);
  };

  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    contactEmail: "",
    budget: "1000",
    product: "",
    paymentMethod: "Cih",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    if (value === "") {
      setErrors((prevState) => ({ ...prevState, [name]: true }));
    } else {
      setErrors((prevState) => ({ ...prevState, [name]: false }));
    }
    if (name === "contactEmail") {
      if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.contactEmail)
      ) {
        setErrors((prevState) => ({ ...prevState, [name]: true }));
      } else {
        setErrors((prevState) => ({ ...prevState, [name]: false }));
      }
    }
  };
  const handleNewOrderButton = (product) => {
    setFormData((prevState) => ({ ...prevState, product: product }));

    setFormStep(FormStep + 1);
  };
  const [FormStep, setFormStep] = useState(0);
  function NextStep() {
    if (FormStep === 4) {
      return;
    }
    let hasErorrs = false;
    if (FormStep === 1 || FormStep === 2 || FormStep === 3) {
      if (formData.businessName === "") {
        setErrors((prevState) => ({ ...prevState, businessName: true }));
        hasErorrs = true;
      }
      if (formData.contactName === "") {
        setErrors((prevState) => ({ ...prevState, contactName: true }));
        hasErorrs = true;
      }
      if (formData.contactEmail === "") {
        setErrors((prevState) => ({ ...prevState, contactEmail: true }));
        hasErorrs = true;
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.contactEmail)
      ) {
        hasErorrs = true;
      }
      if (formData.budget === "") {
        setErrors((prevState) => ({ ...prevState, budget: true }));
        hasErorrs = true;
      } else if (formData.budget < 1000 || formData.budget > 100000) {
        setErrors((prevState) => ({
          ...prevState,
          budget: "the budget should be between 1000 and 100000",
        }));
        hasErorrs = true;
      }
      if (hasErorrs) {
        return;
      }
      setErrors((prevState) => ({
        ...prevState,
        businessName: false,
        contactName: false,
        contactEmail: false,
      }));
    }
    // wait 1 second to show the loading

    setFormStep(FormStep + 1);
  }
  function PreviousStep() {
    if (FormStep === 0) {
      return;
    }
    setFormStep(FormStep - 1);
  }

  return (
    <div className="section p-8  rounded-lg mt-4 ml-12">
      {FormStep === 0 && (
        <section>
          {" "}
          <div className="font-bold text-3xl  capitalize mb-4 dark:text-white">
            {" "}
            01-Choose your platform
          </div>
          <div className="orders flex-row lg:flex  justify-evenly bg-white rounded-lg p-12 dark:bg-primary_dark_bg align-center ">
            <div className="order w-32 text-center mx-6 flex flex-col items-center">
              <div className="order-header-name-icon mb-2">
                <img src={MetaLogo} alt="facebook-logo" />
              </div>
              <div className="order-header-name-text mb-8 text-base font-semibold dark:text-white row-span-1 ">
                Meta
              </div>
              <button
                onClick={() => handleNewOrderButton("Meta")}
                className="order-button  hover:scale-110 hover:backgroud_light_red transition ease-in-out bg-main_red dark:bg-red-800 text-white px-2 py-1 rounded cursor-pointer w-32 text-xl"
              >
                Order
              </button>
            </div>
            <div className="order w-32 text-center mx-6 flex flex-col items-center">
              <div className="order-header-name-icon mb-2">
                <img src={tiktokLogo} alt="tiktok" />
              </div>
              <div className="order-header-name-text mb-8 font-semibold dark:text-white">
                TikTok
              </div>
              <button
                onClick={() => handleNewOrderButton("tiktok")}
                className="order-button  hover:scale-110 hover:backgroud_light_red transition ease-in-out bg-main_red dark:bg-red-800 text-white px-2 py-1 rounded cursor-pointer w-32 text-xl"
              >
                Order
              </button>
            </div>

            <div className="order w-32 text-center mx-6 flex flex-col items-center">
              <div className="order-header-name-icon mb-2">
                <img src={GoogleLogo} alt="Google" />
              </div>
              <div className="order-header-name-text mb-8 font-semibold dark:text-white">
                Google
              </div>
              <button
                onClick={() => handleNewOrderButton("google")}
                className="order-button  hover:scale-110 hover:backgroud_light_red transition ease-in-out bg-main_red dark:bg-red-800 text-white px-2 py-1 rounded cursor-pointer w-32 text-xl"
              >
                Order
              </button>
            </div>
            <div className="order w-32 text-center mx-6 flex flex-col items-center">
              <div className="order-header-name-icon mb-2">
                <img src={SnapchatLogo} alt="snapchat" />
              </div>
              <div className="order-header-name-text mb-8 font-semibold dark:text-white">
                snapchat
              </div>
              <button
                onClick={() => handleNewOrderButton("snapchat")}
                className="order-button  hover:scale-110 hover:backgroud_light_red transition ease-in-out bg-main_red dark:bg-red-800 text-white px-2 py-1 rounded cursor-pointer w-32 text-xl"
              >
                Order
              </button>
            </div>
          </div>
        </section>
      )}
      {FormStep === 1 && (
        <div className="orders flex justify-center bg-white dark:bg-primary_dark_bg rounded-lg p-12 ">
          <section>
            <div className="text-2xl font-semibold mt-4 dark:text-white">
              {" "}
              Enter your informations
            </div>
            <p className="mt-1 text-sm leading-6 text-gray-600 mb-4 dark:text-gray-300">
              Use a permanent address where you can receive mail.
            </p>
            <Input
              label="Business name"
              placeholder="Business name"
              name="businessName"
              onBlur={handleInputBlur}
              type="text"
              value={formData.businessName}
              onChange={handleInputChange}
              error={errors.businessName}
            />
            <Input
              label="Contact name"
              name="contactName"
              placeholder="Contact Name"
              type="text"
              onBlur={handleInputBlur}
              value={formData.contactName}
              onChange={handleInputChange}
              error={errors.contactName}
            />
            <Input
              label="Email"
              name="contactEmail"
              placeholder="example@email.com"
              type="email"
              value={formData.contactEmail}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              error={errors.contactEmail}
            />
          </section>
        </div>
      )}{" "}
      {FormStep === 2 && (
        <div className=" flex justify-center bg-white rounded-lg p-8 dark:bg-primary_dark_bg">
          {" "}
          <section>
            <div className="text-2xl font-semibold dark:text-white ">
              Your Budget
            </div>
            <p className="mt-1 text-sm leading-6 text-gray-600 mb-4 dark:text-stone-400">
              Select or enter your custom amount and choose your payment option.
            </p>
            <div className="sm:col-span-3">
              <label
                htmlFor="budget-select"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Budget
              </label>
              <div>
                <CustomListBox
                  amounts={amounts}
                  selectedAmount={selectedAmount}
                  handleSelectAmount={handleSelectAmount}
                />
              </div>
              <div
                className={` mt-1 ${
                  selectedAmount.amount === "custom" ? null : "hidden"
                }`}
              >
                <Input
                  label="custom amount"
                  name="budget"
                  placeholder="custom amount"
                  type="number"
                  max="100000"
                  min="1000"
                  value={formData.budget}
                  onBlur={handleInputBlur}
                  onChange={handleInputChange}
                  error={errors.budget}
                />
              </div>
            </div>
            <PaymentMethods
              defaultPaymentMethods={defaultPaymentMethods}
              handlePaymentItemClick={handlePaymentItemClick}
            />
          </section>
        </div>
      )}
      {FormStep === 3 && (
        <OrderSummary
          formData={formData}
          handleConfirmOrder={handleConfirmOrder}
          isLoading={isLoading}
        />
      )}
      {FormStep !== 0 && FormStep !== 3 && (
        <div className="flex justify-center mt-4 ">
          <button
            onClick={PreviousStep}
            className="order-button bg-white dark:bg-white dark:text-main_red dark:border-main_red  hover:bg-main_red text-red-500 hover:text-white font-semibold py-2  px-8 border border-gray-200 rounded shadow  mr-4"
          >
            Back
          </button>
          <button
            onClick={NextStep}
            className="order-button dark:bg-main_red dark:text-white dark:border-main_red hover:scale-105 disabled:bg-gray-50  disabled:hover:bg-red-300 bg-white hover:bg-main_red text-red-500 hover:text-white font-semibold py-2 px-8 border border-gray-200 rounded shadow "
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
export default NewOrder;
