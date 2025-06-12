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
  MdOutlineLocalHospital,
  MdPayments,
} from "react-icons/md";

import AddBlog from "views/admin/blog/AddBlog";
import OurTeams from "views/admin/ourTeams";
import AddOurTeams from "views/admin/ourTeams/AddOurTeams";
import Services from "views/admin/services";
import AddServices from "views/admin/services/AddServices";
import AboutUs from "views/admin/aboutUs";
import ListPatient from "views/admin/patient";
import AddPatient from "views/admin/patient/AddPatient";
import Dashboard from "views/admin/dashboard";
import ListBloodDonor from "views/admin/bloodDonor";
import AddBooldDonor from "views/admin/bloodDonor/AddBloodDonor";
import AllReportList from "views/admin/report";
import AddReport from "views/admin/report/AddReport";
import ListAllDoctors from "views/admin/staff/doctors";
import AddDoctors from "views/admin/staff/doctors/AddDoctor";
import ListAllNurse from "views/admin/staff/nurse";
import AddNurses from "views/admin/staff/nurse/AddNurses";
import ListAllAccountant from "views/admin/staff/accountant";
import AddAccountant from "views/admin/staff/accountant/AddAccountant";
import ListAllLaboratorist from "views/admin/staff/laboratorist";
import AddLaboratorist from "views/admin/staff/laboratorist/AddLaboratorist";
import ListAllPharmacist from "views/admin/staff/pharmacist";
import AddPharmacist from "views/admin/staff/pharmacist/AddPharmacist";
import AddSpecialization from "views/admin/specialization/AddSpecialization";
import ListAllSpecialization from "views/admin/specialization";
import ListAllBeds from "views/admin/bed";
import AddBeds from "views/admin/bed/AddBeds";
import ListAllAllocatedBeds from "views/admin/bed/bedAllocated";
import AddAllocatedBeds from "views/admin/bed/bedAllocated/AddAllocatedBeds";

import PaymentHistory from "views/admin/invoice/paymentHistory";
import ListInvoice from "views/admin/invoice";
import AddInvoice from "views/admin/invoice/AddInvoice";
import ListAppointment from "views/admin/appointment";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "dashboard",
    icon: <MdHome className="h-6 w-7" />,
    component: <Dashboard />,
  },
  {
    name: "Manage Specialization",
    layout: "/admin",
    path: "specialization",
    component: <ListAllSpecialization />,
    icon: <MdOutlineLocalHospital className="h-6 w-7" />,
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
      },

      {
        name: "Manage Nurse",
        layout: "/admin",
        path: "staff/nurse",
        component: <ListAllNurse />,
      },
      {
        name: "Manage Accountant",
        layout: "/admin",
        path: "staff/accountant",
        component: <ListAllAccountant />,
      },
      {
        name: "Manage Laboratorist",
        layout: "/admin",
        path: "staff/laboratorist",
        component: <ListAllLaboratorist />,
      },
      {
        name: "Manage Pharmasict",
        layout: "/admin",
        path: "staff/pharmacist",
        component: <ListAllPharmacist />,
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
        name: "Manage bed",
        layout: "/admin",
        component: <ListAllBeds />,
        path: "bed",
      },
      {
        name: "Manage Bed Allocated",
        path: "bed/allocated",
        layout: "/admin",
        component: <ListAllAllocatedBeds />,
      },
    ],
  },
  // manage Appointment
  {
    name: "Viwe Appointment",
    path: "appointment",
    layout: "/admin",
    component: <ListAppointment />,
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
    component: <ListInvoice />,
    icon: <MdInventory className="h-6 w-7" />,
  },
  {
    name: "Payment History",
    layout: "/admin",
    path: "payment/history",
    component: <PaymentHistory />,
    icon: <MdPayments className="h-6 w-7" />,
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
    path: "about",
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

  // All hidden routes
  {
    layout: "/admin",
    path: "blog/add",
    component: <AddBlog />,
    hidden: true,
  },
  {
    layout: "/admin",
    path: "our/teams",
    component: <AddOurTeams />,
    hidden: true,
  },
  {
    layout: "/admin",
    path: "services/add",
    component: <AddServices />,
    hidden: true,
  },
  {
    layout: "/admin",
    path: "patient/add",
    component: <AddPatient />,
    hidden: true,
  },
  // add blood bonor
  {
    layout: "/admin",
    path: "blooddonor/add",
    component: <AddBooldDonor />,
    hidden: true,
  },
  // Specialozation
  {
    path: "specialization/add",
    layout: "/admin",
    component: <AddSpecialization />,
    hidden: true,
  },
  //  doctors add
  {
    layout: "/admin",
    path: "staff/doctor/add",
    component: <AddDoctors />,
    hidden: true,
  },
  {
    layout: "/admin",
    path: "staff/nurse/add",
    component: <AddNurses />,
    hidden: true,
  },
  {
    layout: "/admin",
    path: "staff/accountant/add",
    component: <AddAccountant />,
    hidden: true,
  },
  {
    layout: "/admin",
    path: "staff/laboratorist/add",
    component: <AddLaboratorist />,
    hidden: true,
  },
  {
    layout: "/admin",
    path: "staff/pharmacist/add",
    component: <AddPharmacist />,
    hidden: true,
  },
  // bed Added
  {
    layout: "/admin",
    path: "/bed/add",
    component: <AddBeds />,
    hidden: true,
  },
  // Allocated beds
  {
    layout: "/admin",
    path: "/bed/allocated/add",
    component: <AddAllocatedBeds />,
    hidden: true,
  },
  // Report add
  {
    layout: "/admin",
    path: "report/add",
    component: <AddReport />,
    hidden: true,
  },
  // invoice
  {
    layout: "/admin",
    path: "invoice/add",
    component: <AddInvoice />,
    hidden: true,
  },
];
export default routes;
