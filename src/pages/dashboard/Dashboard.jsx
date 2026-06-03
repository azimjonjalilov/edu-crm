import Card from "../../features/dashboard/components/Card";
import styles from "./Dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardInfo } from "../../redux/slices/dashboard/dashboardSlice";
import { useEffect } from "react";

const Dashboard = () => {
  const { loading, data } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboardInfo());
  }, []);

  const cardData = [];
  for (let key in data) {
    cardData.push({ title: key.replace("Count", ""), total: data[key] });
  }

  if (loading) return <h1>Loading</h1>;

  return (
    <div className={styles.container}>
      {cardData.map((info) => (
        <Card key={info.title} info={info} />
      ))}
    </div>
  );
};

export default Dashboard;
