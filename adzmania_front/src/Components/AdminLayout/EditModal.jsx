import React from "react";

import Input from "../../Views/Input";

import { format, set } from "date-fns";
const EditModal = ({ isOpen, setIsOpen, order, setOrder, handleSave }) => {
  const [errors, setErrors] = React.useState({
    email: false,
    name: false,
  });
  const handleChange = (e) => {
    setOrder((prev) => ({
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
  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 min-3xl mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Order</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 grid grid-cols-2 gap-4 items-end">
                  <div className="mt-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                      htmlFor="order-id"
                    >
                      order id <span>(read only)</span>
                    </label>

                    <input
                      type="text"
                      id="id"
                      aria-label="order-id"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={order.id}
                      disabled
                      readonly
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="user_id"
                    >
                      user id
                    </label>
                    <input
                      type="text"
                      id="user_id"
                      aria-label="user_id"
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={order.user_id}
                      disabled
                      readonly
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      email
                    </label>
                    <input
                      type="text"
                      id="email"
                      aria-label="email"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={order.email}
                      disabled
                      readonly
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="status"
                    >
                      status
                    </label>

                    <select
                      name="status"
                      id="status"
                      value={order.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    >
                      <option value="pending">pending</option>
                      <option value="process">process</option>
                      <option value="delivered">delivered</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="product"
                    >
                      product
                    </label>
                    <select
                      name="product"
                      id="product"
                      value={order.product}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    >
                      <option value="meta">meta</option>
                      <option value="google">google</option>
                      <option value="snapchat">snapchat</option>
                      <option value="tiktok">tiktok</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      contact name
                    </label>
                    <input
                      type="text"
                      id="contact_name"
                      aria-label="contact_name"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={order.contact_name}
                      disabled
                      readonly
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="phone"
                    >
                      phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={order.phone}
                      error={errors.phone}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      autoComplete="phone"
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="amount"
                    >
                      amount
                    </label>
                    <Input
                      id="amount"
                      name="amount"
                      value={order.amount}
                      error={errors.amount}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      autoComplete="amount"
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="payment_mode"
                    >
                      payment mode
                    </label>
                    <select
                      name="payment_mode"
                      id="payment_mode"
                      value={order.payment_mode.toLowerCase()}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    >
                      <option value="cih">cih</option>
                      <option value="payoneer">payoneer</option>
                      <option value="wise">wise</option>
                      <option value="paypal">paypal</option>
                    </select>
                  </div>

                  <div className="mt-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="date"
                    >
                      date
                    </label>
                    <input
                      type="text"
                      id="date"
                      aria-label="date"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={format(new Date(order.date), "dd/MM/yyyy")}
                      disabled
                      readonly
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="business_name"
                    >
                      business name
                    </label>
                    <input
                      type="text"
                      id="business_name"
                      aria-label="business_name"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={order.business_name}
                      disabled
                      readonly
                    />
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default EditModal;
