import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import layouts
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";
import GroupsLayout from "./layouts/groupsLayout/GroupsLayout";

// import pages
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Groups from "./pages/groups/Groups";
import Teachers from "./pages/teachers/Teachers";
import Students from "./pages/students/Students";
import GroupAttendance from "./pages/groups/groupAttendance/GroupAttendance";
import GroupCoins from "./pages/groups/groupCoins/GroupCoins";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import ErrorPage from "./pages/errorPage/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "groups",
          element: <Groups />,
        },
        {
          path: "groups/:id",
          element: <GroupsLayout />,
          children: [
            {
              index: true,
              element: <GroupAttendance />,
            },
            {
              path: "coins",
              element: <GroupCoins />,
            },
          ],
        },
        {
          path: "teachers",
          element: <Teachers />,
        },
        {
          path: "students",
          element: <Students />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
