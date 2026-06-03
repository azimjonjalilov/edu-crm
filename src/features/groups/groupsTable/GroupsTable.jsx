import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./GroupsTable.module.css";
import Modal from "../../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import AddGroupForm from "../addGroupForm/AddGroupForm";
import DeleteForm from "../../../components/deleteForm/DeleteForm";

const GroupsTable = ({ searchBy, groups }) => {
  const [showData, setShowData] = useState(groups);
  const [showModal, setShowModal] = useState(false);
  const [deleteShowModal, setDeleteShowModal] = useState(false);

  useEffect(() => {
    const filteredData = groups.filter((group) =>
      group.name.toLowerCase().includes(searchBy.toLowerCase()),
    );

    setShowData(filteredData);
  }, [searchBy]);

  function editGroup(group) {
    console.log("edit", group);
    setShowModal(true);
  }

  function deleteGroup(group) {
    console.log("delete", group);
    setDeleteShowModal(true);
  }

  return (
    <>
      {showModal && (
        <Modal>
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
          <AddGroupForm setShowModal={setShowModal} />
        </Modal>
      )}

      {deleteShowModal && (
        <Modal>
          <DeleteForm
            title={"Are you sure to delete this group ?"}
            setDeleteShowModal={setDeleteShowModal}
          />
        </Modal>
      )}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Group Name</th>
              <th>Students</th>
              <th>Teacher</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {showData.map((group, index) => (
              <tr key={group.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`${group.id}`}>{group.name}</Link>
                </td>
                <td>{group.studentsCount}</td>
                <td>{group.teacher?.fullName}</td>
                <td>{group.speciality}</td>

                <td>
                  <div className={styles.actions}>
                    <button
                      className={styles.editBtn}
                      onClick={() => editGroup(group)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => deleteGroup(group)}
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

export default GroupsTable;
