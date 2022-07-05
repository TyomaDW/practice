import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import edit from "../icons/edit.svg";
import unpublish from "../icons/unpublish.svg";
import del from "../icons/del.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EventList() {
  return (
    <div className="container mx-auto flex flex-col space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-3">
      <div className="px-4">
        <div className="bg-slate-300 rounded-[18px]">
          <p className="font-semibold text-xl mx-5 pb-10 pt-3">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="flex justify-between mx-5 pb-3.5">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button>•••</Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute -left-5 mt-6 w-40 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#"
                          className={classNames(
                            active ? "bg-red-600 text-white" : "text-gray-700",
                            "block px-4 py-2 font-semibold text-xl"
                          )}
                        >
                          Edit
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#"
                          className={classNames(
                            active ? "bg-red-600 text-white" : "text-gray-700",
                            "block px-4 py-2 font-semibold text-xl"
                          )}
                        >
                          <img
                            className="mr-4"
                            src={unpublish}
                            alt="unpublish"
                          />
                          Unpublish
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#"
                          className={classNames(
                            active ? "bg-red-600 text-white" : "text-gray-700",
                            "block px-4 py-2 font-semibold text-xl"
                          )}
                        >
                          <img className="mr-4" src={del} alt="del" />
                          Delete
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
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
