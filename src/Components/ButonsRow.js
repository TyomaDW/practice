import React from "react";
import add from "./Icons/add.svg";

export default function ButonsRow() {
  return (
    <div className="container mx-auto">
      <div className="px-4">
        <div className="flex flex-col bg-slate-300 rounded-lg px-4">
          <button
            type="button"
            class="active:text-white active:bg-blue-600 font-semibold rounded-full text-xl py-2 text-center mb-1.5 mt-3"
          >
            Published
          </button>
          <button
            type="button"
            class="active:text-white active:bg-blue-600 font-semibold rounded-full text-xl py-2 text-center mb-3"
          >
            Unpublished
          </button>
        </div>
      </div>
      <div className="fixed inset-x-9 bottom-0 lg:static">
        <button
          type="button"
          class="flex items-center z-10 text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-xl px-20 lg:px-8 py-4 text-center mb-5"
        >
          <img className="mr-4" src={add} alt="icon" />
          Add Event
        </button>
      </div>
    </div>
  );
}
