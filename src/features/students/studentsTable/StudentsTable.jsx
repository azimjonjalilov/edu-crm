import { useEffect, useState } from "react";
import styles from "./StudentsTable.module.css";
import Modal from "../../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import AddStudentForm from "../addStudentForm/AddStudentForm";
import DeleteForm from "../../../components/deleteForm/DeleteForm";

const StudentsTable = ({ searchBy, students }) => {
  const [showData, setShowData] = useState(students);
  const [showModal, setShowModal] = useState(false);
  const [deleteShowModal, setDeleteShowModal] = useState(false);

  useEffect(() => {
    const filteredData = students.filter(
      (student) =>
        student.fullName.toLowerCase().includes(searchBy.toLowerCase()) ||
        student.phone.toLowerCase().includes(searchBy.toLowerCase()),
    );

    setShowData(filteredData);
  }, [searchBy]);

  function editStudent(student) {
    console.log("edit", student);
    setShowModal(true);
  }

  function deleteStudent(student) {
    console.log("delete", student);
    setDeleteShowModal(true);
  }

  return (
    <>
      {showModal && (
        <Modal>
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
          <AddStudentForm setShowModal={setShowModal} />
        </Modal>
      )}

      {deleteShowModal && (
        <Modal>
          <DeleteForm
            title={"Are you sure to delete this student ?"}
            setDeleteShowModal={setDeleteShowModal}
          />
        </Modal>
      )}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Coin</th>
              <th>Group</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {showData.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.fullName}</td>
                <td>{student.phone}</td>
                <td>{student.coin}</td>
                <td>{student.group?.name}</td>

                <td>
                  <div className={styles.actions}>
                    <button
                      className={styles.editBtn}
                      onClick={() => editStudent(student)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => deleteStudent(student)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentsTable;
