import React from "react";

export default function EventList() {
  return (
    <div className="container mx-auto flex flex-col space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-3">
      <div className="px-4">
        <div className="bg-slate-300 rounded-[18px]">
          <p className="font-semibold text-xl mx-5 pb-10 pt-3">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="flex justify-between mx-5 pb-3.5">
            <button>•••</button>
            <p className="font-medium text-base">{new Date().toDateString()}</p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="bg-slate-300 rounded-[18px]">
          <p className="font-semibold text-xl mx-5 pb-10 pt-3">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="flex justify-between mx-5 pb-3.5">
            <button>•••</button>
            <p className="font-medium text-base">{new Date().toDateString()}</p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="bg-slate-300 rounded-[18px]">
          <p className="font-semibold text-xl mx-5 pb-10 pt-3">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="flex justify-between mx-5 pb-3.5">
            <button>•••</button>
            <p className="font-medium text-base">{new Date().toDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
