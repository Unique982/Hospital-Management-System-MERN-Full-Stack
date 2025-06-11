import MiniCalendar from "components/calendar/MiniCalendar";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import {
  MdBarChart,
  MdBookOnline,
  MdDashboard,
  MdDocumentScanner,
  MdGroup,
  MdLocalHospital,
  MdMedicalServices,
  MdPerson,
  MdPreview,
  MdVerifiedUser,
} from "react-icons/md";

import Widget from "components/widget/Widget";

import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";

import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
        <Widget
          icon={<MdPerson className="h-7 w-7" />}
          title={"Total Patient"}
          subtitle={"+12"}
        />
        <Widget
          icon={<MdLocalHospital className="h-6 w-6" />}
          title={"Total Doctors"}
          subtitle={"+100"}
        />
        <Widget
          icon={<MdMedicalServices className="h-7 w-7" />}
          title={"Total Nurses"}
          subtitle={"5000"}
        />
        <Widget
          icon={<MdGroup className="h-6 w-6" />}
          title={"Total Staff"}
          subtitle={"10"}
        />
        <Widget
          icon={<MdBookOnline className="h-7 w-7" />}
          title={"Total Appointments"}
          subtitle={"2000"}
        />
      </div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3">
        <Widget
          icon={<MdPreview className="h-7 w-7" />}
          title={"Lab Testing Padding"}
          subtitle={"+12"}
        />
        <Widget
          icon={<MdVerifiedUser className="h-6 w-6" />}
          title={"Discharged Patient"}
          subtitle={"+100"}
        />
        <Widget
          icon={<MdDocumentScanner className="h-7 w-7" />}
          title={"Prescriptions"}
          subtitle={"5000"}
        />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <ComplexTable tableData={tableDataComplex} />
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <MiniCalendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
