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
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer text-navy-700 dark:text-white xl:hidden"
        onClick={onClose}
      >
        <HiX size={24} />
      </span>
      <div className="mx-[56px] mt-[50px] flex items-center">
        <div className="ml-1 mt-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          User <span className="font-medium">Panel</span>
        </div>
      </div>

      <div className="mb-2 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />
      <ul className="mb-auto px-2 pt-1">
        {routes.map((route, index) => {
          // Divider rendering
          if (route.type === "divider") {
            return (
              <hr
                key={index}
                className="my-4 border-t border-gray-300 dark:border-white/30"
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
  );
};

export default Sidebar;
