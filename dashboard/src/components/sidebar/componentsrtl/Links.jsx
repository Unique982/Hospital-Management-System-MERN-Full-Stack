import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";

export function SidebarLinks({ routes }) {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  const activeRoute = (routeName) => location.pathname.includes(routeName);

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.layout === "/admin") {
        const isActive = activeRoute(route.path);

        // 🔹 If route has NO children
        if (!route.children) {
          return (
            <Link key={index} to={route.layout + "/" + route.path}>
              <div className="relative mb-3 flex hover:cursor-pointer">
                <li className="my-[3px] flex items-center px-8">
                  <span
                    className={`${
                      isActive
                        ? "font-bold text-brand-500"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.icon || <DashIcon />}
                  </span>
                  <p
                    className={`ms-4 ${
                      isActive
                        ? "font-bold text-navy-700"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.name}
                  </p>
                </li>
                {isActive && (
                  <div className="absolute end-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                )}
              </div>
            </Link>
          );
        }

        // 🔹 If route HAS children (submenu)
        return (
          <div key={index} className="mb-2">
            <div
              onClick={() => toggleMenu(route.name)}
              className="flex cursor-pointer items-center justify-between px-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="flex items-center gap-2">
                {route.icon || <DashIcon />}
                <span className="text-gray-600 dark:text-white">
                  {route.name}
                </span>
              </div>
              <span className="text-xs">
                {openMenus[route.name] ? "▲" : "▼"}
              </span>
            </div>

            {openMenus[route.name] &&
              route.children.map((child, idx) => (
                <Link
                  key={idx}
                  to={`${child.layout || route.layout}/${child.path}`}
                  className="my-1 ml-12 block text-sm text-gray-600 hover:text-brand-500 dark:hover:text-white"
                >
                  {child.name}
                </Link>
              ))}
          </div>
        );
      }

      return null;
    });
  };

  return <ul>{createLinks(routes)}</ul>;
}

export default SidebarLinks;
