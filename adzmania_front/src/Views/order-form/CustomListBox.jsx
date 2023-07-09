import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function CustomListBox({
  amounts,
  selectedAmount,
  handleSelectAmount,
}) {
  return (
    <div className=" ">
      <Listbox value={selectedAmount} onChange={handleSelectAmount}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg dark:text-white bg-white dark:bg-black py-2 pl-3 pr-10 text-left  border border-gray-300 dark:border-gray-700 sm:text-sm">
            <span className="block truncate">
              {selectedAmount.amount}
              {selectedAmount.amount === "custom" ? "" : "$"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {amounts.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100"
                        : "text-gray-900 dark:text-gray-100"
                    }`
                  }
                  value={person}
                >
                  {({ selectedAmount }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selectedAmount ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.amount}
                        {person.amount === "custom" ? null : "$"}
                      </span>
                      {selectedAmount ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600 dark:text-red-400">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
