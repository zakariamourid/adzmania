import React from "react";
import { useEffect } from "react";

function PaymentMethods({ defaultPaymentMethods, handlePaymentItemClick }) {
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, []);
  return (
    <div className="mt-4  flex justify-center payment-methods">
      <div className="w-full  p-4 bg-white border border-gray-200 dark:bg-primary_dark_bg rounded-lg shadow sm:p-6 ">
        {/* dark:bg-gray-800 dark:border-gray-700 */}
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          {/* dark:text-white */}
          Choose payment method
        </h5>
        <p className="text-sm font-normal text-stone-300  ">
          {/* dark:text-gray-400 */}
          Select your preferred payment method.
        </p>
        <ul className="my-4 space-y-3">
          {defaultPaymentMethods.map((item, index) => (
            <li
              key={index}
              href="#"
              className={` cursor-pointer flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-900 dark:hover:bg-slate-600 hover:bg-gray-100 group hover:shadow ${
                item.isSelected ? "bg-red-200 hover:bg-red-100" : ""
              }`}
              onClick={() => handlePaymentItemClick(index, item.name)}
            >
              <img
                src={item.image}
                className={item.name === "Wise" ? "w-12" : "h-6"}
              />
              <span className="flex-1 ml-3 whitespace-nowrap dark:text-white">
                {item.name}
              </span>
              {item.isSelected && (
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-red-100 rounded ">
                  Selected
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PaymentMethods;
