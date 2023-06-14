import React from "react";

function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  error,
  readOnly,
  classes,
  ...rest
}) {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={name}
        className={`block text-sm mb-2 capitalize font-medium text-gray-700 dark:text-white ${
          error ? "text-red-500" : ""
        }`}
      >
        {label}
      </label>
      <div className="">
        <input
          onBlur={onBlur}
          readOnly={!readOnly ? false : true}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-black dark:ring-black dark:bg-black  ${
            error
              ? "ring-red-500 placeholder-red-300 focus:ring-red-500"
              : "ring-dark placeholder:text-gray-400 focus:ring-grayf-900"
          } sm:text-sm sm:leading-6 ${classes}`}
        />
        {error && (
          <p
            className="ml-2 text-sm text-red-500 dark:text-red-800"
            id={`${name}-error`}
          >
            {typeof error === "boolean" ? "This field is required" : error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Input;
