import React from "react";

function Input({ label, type, placeholder, value, onChange, name }) {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="business-name"
        className="block mt-2 text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="">
        <input
          autoFocus
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export default Input;
