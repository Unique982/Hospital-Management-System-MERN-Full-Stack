import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/favicon/web-app-manifest-512x512.png";
import profile from "../../../assets/images/profile.jpg";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", path: "/", current: true },
  { name: "About", id: "about", current: false },
  { name: "Our Teams", id: "our-teams", current: false },
  { name: "Gallery", id: "gallery", current: false },
  { name: "Services", id: "services", current: false },
  { name: "Blogs", id: "blog", current: false },
  { name: "Contact", id: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const location = useLocation();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Disclosure as="nav" className="bg-[#f9f8fa]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.path ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={classNames(
                        location.pathname === item.path
                          ? "bg-black text-white"
                          : "text-black hover:bg-black hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => handleScroll(item.id)}
                      className="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
            >
              <BellIcon className="size-6" />
            </button>
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm">
                  <img
                    className="size-8 rounded-full"
                    src={profile}
                    alt="User"
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden">
                <MenuItem>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) =>
            item.path ? (
              <Link
                key={item.name}
                to={item.path}
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-black hover:text-white"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleScroll(item.id)}
                className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-black hover:bg-black hover:text-white"
              >
                {item.name}
              </button>
            )
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
