import React from "react";

// Admin Imports

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
  MdBloodtype,
  MdBookOnline,
  MdReport,
} from "react-icons/md";

import AddBlog from "views/admin/blog/AddBlog";
import OurTeams from "views/admin/ourTeams";
import AddOurTeams from "views/admin/ourTeams/AddOurTeams";
import Services from "views/admin/services";
import AddServices from "views/admin/services/AddServices";
import AboutUs from "views/admin/aboutUs";
import ListPatient from "views/admin/patient";
import AddPatient from "views/admin/patient/AddPatient";
import Dashboard from "views/admin/default";
import ListBloodDonor from "views/admin/bloodDonor";
import AddBooldDonor from "views/admin/bloodDonor/AddBloodDonor";
import AllReportList from "views/admin/report";
import AddReport from "views/admin/report/AddReport";
import ListAllDoctors from "views/admin/staff/doctors";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-7" />,
    component: <Dashboard />,
  },
  // Staff Section doctor nurse ....
  {
    name: "Manage Staff",
    layout: "/admin",
    path: "staff",
    icon: <MdGroup className="h-6 w-7" />,
    children: [
      {
        name: "Manage Doctor",
        layout: "/admin",
        path: "staff/doctors",
        component: <ListAllDoctors />,
        icon: <MdGroup className="h-6 w-7" />,
      },

      {
        name: "Manage Nurse",
        layout: "/admin",
        path: "nurse",
        icon: <MdGroup className="h-6 w-7" />,
      },
      {
        name: "Manage Accountant",
        layout: "/admin",
        path: "accountant",
        icon: <MdGroup className="h-6 w-7" />,
      },
      {
        name: "Manage Lab",
        layout: "/admin",
        path: "lab",
        icon: <MdPerson className="h-6 w-7" />,
      },
    ],
  },
  // Patient menu bar

  {
    name: "Manage Pateint",
    layout: "/admin",
    path: "patient",
    component: <ListPatient />,
    icon: <MdPerson className="h-6 w-6" />,
  },
  // Manage bed
  {
    name: "Manage Bed",
    layout: "/admin",
    path: "bed",
    icon: <MdBed className="h-6 w-7" />,
    children: [
      {
        name: "manage bed",
        path: "patient",
        icon: <MdBed className="h-6 w-7" />,
      },
      {
        name: "Manage Bed Allocated",
        path: "patient",
        icon: <MdBed className="h-6 w-7" />,
      },
    ],
  },
  // manage Appointment
  {
    name: "Viwe Appointment",
    path: "appointment",
    layout: "/admin",
    icon: <MdBookOnline className="h-6 w-7" />,
  },
  // Manage Blood donnor
  {
    name: "Manage Blood",
    path: "blood",
    layout: "/admin",
    component: <ListBloodDonor />,
    icon: <MdBloodtype className="h-6 w-7" />,
  },
  // manage report
  {
    name: "Manage Report ",
    path: "report",
    layout: "/admin",
    component: <AllReportList />,
    icon: <MdReport className="h-6 w-7" />,
  },

  // Manage Invoice
  {
    name: "Manage Invoice",
    layout: "/admin",
    path: "invoice",
    icon: <MdInventory className="h-6 w-7" />,
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
    component: <AboutUs />,
    icon: <MdInfo className="h-6 w-7" />,
  },
  {
    name: "Services",
    layout: "/admin",
    path: "services",
    component: <Services />,
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
  {
    layout: "/admin",
    path: "services/add",
    component: <AddServices />,
  },
  {
    layout: "/admin",
    path: "patient/add",
    component: <AddPatient />,
  },
  // add blood bonor
  {
    layout: "/admin",
    path: "blooddonor/add",
    component: <AddBooldDonor />,
  },
  // Report add
  {
    layout: "/admin",
    path: "report/add",
    component: <AddReport />,
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
