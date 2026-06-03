import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./StudentsOfGroup.module.css";
import { FaTrash, FaXmark } from "react-icons/fa6";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { groupByID } from "../../redux/slices/groups/groupsSlice";

const StudentsOfGroup = () => {
  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch(groupByID(params.id))]);

  const students = [
    {
      id: 1,
      firstname: "Anvar",
      lastname: "Komilov",
    },
    {
      id: 2,
      firstname: "Sarvar",
      lastname: "Sobirov",
    },
    {
      id: 3,
      firstname: "Bobur",
      lastname: "Komilov",
    },
    {
      id: 4,
      firstname: "Sobir",
      lastname: "Sobirov",
    },
  ];
  return (
    <>
      {showModal && (
        <Modal>
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
          <h1>Delete Student from group</h1>
        </Modal>
      )}
      <div className={styles.container}>
        <ul>
          {students.map((student, i) => (
            <li key={student.id}>
              <span>
                {i + 1}. {student.lastname} {student.firstname}
              </span>
              <button onClick={() => setShowModal(true)}>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StudentsOfGroup;
