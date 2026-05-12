import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <div className={styles.container}>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
