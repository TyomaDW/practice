import React from "react";
import add from "./Icons/add.svg";

export default function ButonsRow() {
  return (
    <div className="container mx-auto sm:flex sm:justify-between">
      <div className="px-4">
        <div className="flex flex-col sm:flex-row sm:rounded-full sm:py-2.5 bg-slate-300 rounded-lg px-4">
          <button
            type="button"
            className="text-white bg-blue-600 font-semibold rounded-full text-xl py-2 text-center mb-1.5 mt-3 sm:mb-0 sm:mt-0 sm:px-14"
          >
            Published
          </button>
          <button
            type="button"
            className="active:text-white active:bg-blue-600 font-semibold rounded-full text-xl py-2 text-center mb-3 sm:mb-0 sm:mt-0 sm:px-14"
          >
            Unpublished
          </button>
        </div>
      </div>
      <div className="fixed inset-x-9 bottom-0 sm:static sm:mr-4">
        <button
          type="button"
          className="flex items-center z-10 text-white bg-green-400 hover:bg-green-300 focus:ring-green-200 font-semibold rounded-full text-xl px-20 lg:px-8 py-4 text-center mb-5 sm:mb-0"
        >
          <img className="mr-4" src={add} alt="icon" />
          Add Event
        </button>
      </div>
    </div>
  );
}
