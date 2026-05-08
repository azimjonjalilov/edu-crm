import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
