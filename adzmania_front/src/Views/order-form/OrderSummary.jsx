import React from "react";

function OrderSummary({ formData, NextStep }) {
  return (
    <div className=" flex justify-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-black dark:text-gray-400">
          Last Step
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">
            {Math.round(formData.budget * 1.1)}
          </span>
        </div>

        <ul role="list" className="space-y-5 my-7">
          <li className="flex justify-between">
            {formData.budget}{" "}
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              solde {formData.platform}
            </span>
          </li>
          <li className="flex justify-between">
            {Math.round(formData.budget * 0.1)}
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              comission 10%{" "}
            </span>
          </li>
          <li className="flex justify-between">
            {formData.paymentMethod}
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Payment method
            </span>
          </li>
        </ul>
        <button
          type="button"
          onClick={NextStep}
          className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
