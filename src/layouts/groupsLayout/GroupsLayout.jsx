import { Outlet } from "react-router-dom";
import GroupNavbar from "../../components/groupNavbar/GroupNavbar";
import StudentsOfGroup from "../../components/studentsOfGroup/StudentsOfGroup";
const GroupsLayout = () => {
  console.log(group);

  return (
    <div>
      <GroupNavbar />
      <main>
        <StudentsOfGroup />
        <Outlet />
      </main>
    </div>
  );
};

export default GroupsLayout;
