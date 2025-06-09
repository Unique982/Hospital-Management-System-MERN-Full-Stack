import React, { Children } from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Staff from "views/admin/staff";
import Setting from "views/admin/setting";
import Blog from "views/admin/blog";

// Icon Imports
import {
  MdHome,
  MdGroup,
  MdBed,
  MdInventory,
  MdInfo,
  MdDesignServices,
  MdPerson,
  MdGroups,
  MdDescription,
  MdSettings,
  MdLock,
} from "react-icons/md";
import { layout } from "@chakra-ui/system";
import AddBlog from "views/admin/blog/AddBlog";
import OurTeams from "views/admin/ourTeams";
import AddOurTeams from "views/admin/ourTeams/AddOurTeams";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Manage Staff",
    layout: "/admin",
    path: "staff",
    icon: <MdGroup className="h-6 w-6" />,
    component: <MainDashboard />,
    children: [
      {
        name: "Manage Doctor",
        layout: "/admin",
        path: "staff",
        icon: <MdGroup className="h-6 w-6" />,
      },
      {
        name: "Manage Nurse",
        layout: "/admin",
        path: "staff",
        icon: <MdGroup className="h-6 w-6" />,
      },
      {
        name: "Manage Accountant",
        layout: "/admin",
        path: "staff",
        icon: <MdGroup className="h-6 w-6" />,
      },
      {
        name: "Manage Lab",
        layout: "/admin",
        path: "staff",
        icon: <MdPerson className="h-6 w-6" />,
      },
    ],
  },
  {
    name: "Manage Pateint",
    layout: "/admin",
    path: "patient",
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: "Manage Bed",
    layout: "/admin",
    path: "patient",
    icon: <MdBed className="h-6 w-6" />,
    children: [
      {
        name: "manage bed",
        path: "patient",
        icon: <MdBed className="h-6 w-6" />,
      },
      {
        name: "Manage Bed Allocated",
        path: "patient",
        icon: <MdBed className="h-6 w-6" />,
      },
    ],
  },
  {
    name: "Manage Invoice",
    layout: "/admin",
    path: "patient",
    icon: <MdInventory className="h-6 w-6" />,
  },
  {
    type: "divider",
  },
  {
    type: "section",
    label: "Pages",
  },
  {
    name: "About",
    layout: "/admin",
    path: "dashboard",
    icon: <MdInfo className="h-6 w-7" />,
  },
  {
    name: "Services",
    layout: "/admin",
    path: "dashboard",
    icon: <MdDesignServices className="h-6 w-7" />,
  },
  {
    name: "Our Teams",
    layout: "/admin",
    path: "our-teams",
    icon: <MdGroups className="h-6 w-7" />,
    component: <OurTeams />,
  },
  // blog section route
  {
    name: "Blog",
    layout: "/admin",
    path: "blog",
    component: <Blog />,
    icon: <MdDescription className="h-6 w-7" />,
  },

  // Setting route
  {
    name: "Setting",
    layout: "/admin",
    path: "setting",
    icon: <MdSettings className="h-6 w-7" />,
    component: <Setting />,
  },
  {
    layout: "/admin",
    path: "blog/add",
    component: <AddBlog />,
  },
  {
    layout: "/admin",
    path: "our/teams",
    component: <AddOurTeams />,
  },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
