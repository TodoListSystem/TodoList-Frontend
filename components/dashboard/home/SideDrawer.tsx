import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { SiOpenlayers } from "react-icons/si";

interface SideDrawerProps {
  setActiveTab: (type: string) => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ setActiveTab }) => {
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-gray-800 transform-none">
      <div className="py-4 overflow-y-auto flex flex-col justify-between mt-8 h-[calc(100%-2rem)]">
        <div>
          <ul className="space-y-2 font-medium mb-1">
            <div
              onClick={() => setActiveTab("my-tasks")}
              className="flex justify-between p-2 text-white hover:bg-gray-700 group cursor-pointer"
            >
              <div className="flex items-center">
                <SiOpenlayers className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                <span className="ms-3">My Tasks</span>
              </div>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium rounded-full bg-red-900 text-red-300">
                3
              </span>
            </div>
          </ul>
          <ul className="space-y-2 font-medium">
            <div
              onClick={() => setActiveTab("completed-tasks")}
              className="flex justify-between p-2 text-white hover:bg-gray-700 group cursor-pointer"
            >
              <div className="flex items-center">
                <FaCheckCircle className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                <span className="ms-3">Completed Tasks</span>
              </div>
            </div>
          </ul>
        </div>
        <div className="p-4 mt-6 rounded-lg bg-blue-900">
          <div className="flex items-center mb-3">
            <span className="text-sm font-semibold me-2 px-2.5 py-0.5 rounded bg-orange-200 text-orange-900">
              Beta
            </span>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 inline-flex justify-center items-center w-6 h-6 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 bg-blue-900 text-blue-400 hover:bg-blue-800"
              data-dismiss-target="#dropdown-cta"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <p className="mb-3 text-sm text-blue-400">
            Explore the new ToDo app interface! You can switch back to the
            classic layout for a limited time in your settings.
          </p>
          <a className="text-sm underline font-medium text-blue-400 hover:text-blue-300">
            Turn new navigation off
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
