import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import routes from "routes.js";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = ({ open, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-50 h-full w-64 bg-white shadow-lg transition-all duration-300 dark:bg-navy-800  ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer text-navy-700 dark:text-white xl:hidden"
        onClick={onClose}
      >
        <HiX size={24} />
      </span>
      <div className="flex h-20 items-center px-6">
        <div className="text-2xl font-bold text-navy-700 dark:text-white">
          User <span className="font-medium">Panel</span>
        </div>
      </div>

      <div className="h-px bg-gray-300 dark:bg-white/30" />

      <div className="h-[calc(100%-5rem)] overflow-y-auto">
        <ul className="space-y-1 p-2">
          {routes.map((route, index) => {
            if (route.hidden) return null;
            if (route.type === "divider") {
              return (
                <li
                  key={index}
                  className="my-2 border-t border-gray-300 dark:border-white/30"
                />
              );
            }
            if (route.type === "section") {
              return (
                <li
                  key={index}
                  className="mb-2 px-3 pt-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400"
                >
                  {route.label}
                </li>
              );
            }

            // Normal menu item
            return (
              <li key={index} className="mb-2">
                <div
                  className="flex cursor-pointer items-center justify-between rounded-md p-2 text-navy-700 hover:bg-blue-100 hover:text-blue-700 dark:text-white dark:hover:bg-navy-600 dark:hover:text-blue-400"
                  onClick={() => route.children && toggleDropdown(index)}
                >
                  <NavLink
                    to={`${route.layout}/${route.path}`}
                    className="flex flex-grow items-center gap-2 font-medium"
                    onClick={(e) => {
                      if (route.children) e.preventDefault();
                    }}
                    activeClassName="text-blue-600 font-semibold"
                  >
                    {route.icon}
                    <span>{route.name}</span>
                  </NavLink>

                  {route.children && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="focus:outline-none"
                      aria-label="Toggle dropdown"
                    >
                      {openDropdown === index ? (
                        <MdKeyboardArrowDown size={24} />
                      ) : (
                        <MdKeyboardArrowRight size={24} />
                      )}
                    </button>
                  )}
                </div>

                {route.children && openDropdown === index && (
                  <ul className="ml-6 mt-2 space-y-1 border-l-2 border-blue-300 pl-3 dark:border-blue-600">
                    {route.children.map((child, i) => (
                      <li key={i}>
                        <NavLink
                          to={`${child.layout}/${child.path}`}
                          className="flex items-center gap-2 rounded-md px-3 py-1 text-gray-700 hover:bg-blue-100 hover:text-blue-700 dark:text-gray-300 dark:hover:bg-navy-600 dark:hover:text-blue-400"
                          activeClassName="bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-white"
                        >
                          {child.icon && (
                            <span className="text-lg">{child.icon}</span>
                          )}
                          <span>{child.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
