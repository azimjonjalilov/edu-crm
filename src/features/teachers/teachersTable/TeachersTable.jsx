import { useEffect, useState } from "react";
import styles from "./TeachersTable.module.css";
import Modal from "../../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import AddTeacherForm from "../addTeacherForm/AddTeacherForm";
import DeleteForm from "../../../components/deleteForm/DeleteForm";

const teachers = [
  {
    id: 1,
    fullName: "Eshmatov Toshmat",
    phone: "+998901234567",
    students: 24,
    groups: 3,
  },
  {
    id: 2,
    fullName: "Soliyev Kamron",
    phone: "+9989012234325",
    students: 30,
    groups: 4,
  },
];

const TeachersTable = ({ searchBy }) => {
  const [showData, setShowData] = useState(teachers);
  const [showModal, setShowModal] = useState(false);
  const [deleteShowModal, setDeleteShowModal] = useState(false);

  useEffect(() => {
    const filteredData = teachers.filter(
      (teacher) =>
        teacher.fullName.toLowerCase().includes(searchBy.toLowerCase()) ||
        teacher.phone.toLowerCase().includes(searchBy.toLowerCase()),
    );

    setShowData(filteredData);
  }, [searchBy]);

  function editTeacher(teacher) {
    console.log("edit", teacher);
    setShowModal(true);
  }

  function deleteTeacher(teacher) {
    console.log("delete", teacher);
    setDeleteShowModal(true);
  }

  return (
    <>
      {showModal && (
        <Modal>
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
          <AddTeacherForm setShowModal={setShowModal} />
        </Modal>
      )}

      {deleteShowModal && (
        <Modal>
          <DeleteForm
            title={"Are you sure to delete this teacher ?"}
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
              <th>Students</th>
              <th>Groups</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {showData.map((teacher, index) => (
              <tr key={teacher.id}>
                <td>{index + 1}</td>
                <td>{teacher.fullName}</td>
                <td>{teacher.phone}</td>
                <td>{teacher.students}</td>
                <td>{teacher.groups}</td>

                <td>
                  <div className={styles.actions}>
                    <button
                      className={styles.editBtn}
                      onClick={() => editTeacher(teacher)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => deleteTeacher(teacher)}
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

export default TeachersTable;
