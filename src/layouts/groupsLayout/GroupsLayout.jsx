import { Outlet } from "react-router-dom";
import GroupNavbar from "../../components/groupNavbar/GroupNavbar";
import StudentsOfGroup from "../../components/studentsOfGroup/StudentsOfGroup";

import styles from "./GroupsLayout.module.css";

const GroupsLayout = () => {
  return (
    <div className={styles.wrapper}>
      <GroupNavbar />
      <main className={styles.container}>
        <StudentsOfGroup />
        <Outlet />
      </main>
    </div>
  );
};

export default GroupsLayout;
