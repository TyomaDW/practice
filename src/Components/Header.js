import React from "react";
import data from "../data/timezones.json";
import icon from "../icons/icon.svg";

export default function Header() {
  return (
    <>
      <div className="mx-auto px-4 pt-3.5 pb-4 container sm:pr-21 sm:px-4 sm:flex sm:justify-between">
        <div className="block">
          <h1 className="font-semibold text-center text-4xl sm:py-5">
            Event Manager
          </h1>
        </div>
        <div className="sm:flex">
          <div className="flex justify-center pt-4 pb-3.5 sm:items-center">
            <img className="mr-4" src={icon} alt="icon" />
            <h2 className="mt-1 font-semibold text-xl sm:mr-8">
              Select Timezone
            </h2>
          </div>
          <div className="flex justify-center sm:items-center">
            <select
              className="block w-full appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              name="timezones"
              onChange={function () {}}
            >
              <option className="font-medium text-lg text-center">
                Central European Time
              </option>
              {Object.keys(data.timezones).map((item) => (
                <option
                  key={data.timezones[item].id}
                  value={data.timezones[item].name}
                >
                  {data.timezones[item].name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
