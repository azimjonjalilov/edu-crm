import Card from "../../features/dashboard/components/Card";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const cardData = [
    {
      title: "Groups",
      total: 14,
    },
    {
      title: "Teachers",
      total: 5,
    },
    {
      title: "Students",
      total: 143,
    },
  ];
  return (
    <div className={styles.container}>
      {cardData.map((info) => (
        <Card key={info.title} info={info} />
      ))}
    </div>
  );
};

export default Dashboard;
