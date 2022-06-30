import React from "react";
import add from "./Icons/add.svg";

export default function ButonsRow() {
  return (
    <div className="container mx-auto">
      <div className="">
        <button type="button" className="rounded-full">
          Published
        </button>
        <button type="button" className="rounded-full">
          Unpublished
        </button>
      </div>
      <div className="fixed inset-x-9 bottom-0 lg:static">
        <button
          type="button"
          class="flex items-center z-10 text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-xl px-20 py-4 text-center mb-5"
        >
          <img className="mr-4" src={add} alt="icon" />
          Add Event
        </button>
      </div>
    </div>
  );
}
