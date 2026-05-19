import { useParams } from "react-router-dom";
import styles from "./GroupAttendance.module.css";

const GroupAttendance = () => {
  const students = [{}, {}, {}, {}];
  const lessons = [
    {
      id: 1,
      date: "12",
    },
    {
      id: 2,
      date: "14",
    },
    {
      id: 3,
      date: "17",
    },
    {
      id: 4,
      date: "12",
    },
    {
      id: 5,
      date: "14",
    },
    {
      id: 6,
      date: "17",
    },
    {
      id: 7,
      date: "12",
    },
    {
      id: 8,
      date: "14",
    },
    {
      id: 9,
      date: "17",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {lessons.map((lesson) => {
          return (
            <div key={lesson.id} className={styles.lesson}>
              {students.map((student, i) => {
                return <div key={i} className={styles.checking}></div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupAttendance;
