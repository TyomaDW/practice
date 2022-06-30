import React from "react";
import icon from "./Icons/icon.svg";

export default function Header() {
  return (
    <>
      <div className="mx-auto px-4 pt-3.5 pb-4 container lg:pr-21 lg:px-4 lg:flex lg:justify-between">
        <div className="block">
          <h1 className="font-semibold text-center text-4xl lg:py-5">
            Event Manager
          </h1>
        </div>
        <div className="lg:flex">
          <div className="flex justify-center pt-4 pb-3.5 lg:items-center">
            <img className="mr-4" src={icon} alt="icon" />
            <h2 className="mt-1 font-semibold text-xl lg:mr-8">
              Select Timezone
            </h2>
          </div>
          <div class="flex justify-center lg:items-center">
            <select class="block w-full appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option className="font-medium text-lg text-center">
                Central European Time
              </option>
              <option className="font-medium text-lg text-center">
                Option 2
              </option>
              <option className="font-medium text-lg text-center">
                Option 3
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
