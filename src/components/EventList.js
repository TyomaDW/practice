import React, { useState, useCallback } from "react";

import edit from "../icons/edit.svg";
import unpublish from "../icons/unpublish.svg";
import del from "../icons/del.svg";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export default function EventList() {
  const [isDropdownToggle, setIsDropdownToggle] = useToggle();

  return (
    <div className="container mx-auto flex flex-col space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-3">
      <div className="px-4">
        <div className="bg-slate-300 rounded-[18px]">
          <p className="font-semibold text-xl mx-5 pb-10 pt-3">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="flex justify-between mx-5 pb-3.5">
            <div className="relative">
              <button className="" onClick={setIsDropdownToggle}>
                •••
              </button>

              {isDropdownToggle ? (
                <div class="absolute -left-5 w-52 px-3 py-3 bg-white rounded-lg shadow border mt-6">
                  <ul class="space-y-3">
                    <li
                      onClick={setIsDropdownToggle}
                      class="font-semibold text-xl"
                    >
                      <a
                        href="/#"
                        class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                      >
                        <div class="">
                          <img className="mr-5" src={edit} alt="edit" />
                        </div>
                        Edit
                      </a>
                    </li>
                    <li
                      onClick={setIsDropdownToggle}
                      class="font-semibold text-xl"
                    >
                      <a
                        href="/#"
                        class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                      >
                        <div class="">
                          <img
                            className="mr-4"
                            src={unpublish}
                            alt="unpublish"
                          />
                        </div>
                        Unpublish
                      </a>
                    </li>

                    <li
                      onClick={setIsDropdownToggle}
                      class="font-semibold text-xl"
                    >
                      <a
                        href="/#"
                        class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                      >
                        <div class="">
                          <img className="mr-5" src={del} alt="del" />
                        </div>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
            <p className="font-medium text-base">{new Date().toDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
