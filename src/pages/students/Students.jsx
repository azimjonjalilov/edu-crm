import { useState } from "react";
import Header from "../../components/header/Header";
import StudentsTable from "../../features/students/studentsTable/StudentsTable";
import Modal from "../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import AddStudentForm from "../../features/students/addStudentForm/AddStudentForm";

const Students = () => {
  const [searchBy, setSearchBy] = useState("");
  const [showModal, setShowModal] = useState(false);

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
      <div>
        <Header setSearchBy={setSearchBy} setShowModal={setShowModal} />
        <StudentsTable searchBy={searchBy} />
      </div>
    </>
  );
};

export default Students;
