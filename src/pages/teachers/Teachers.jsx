import { useState } from "react";
import Header from "../../components/header/Header";
import TeachersTable from "../../features/teachers/teachersTable/TeachersTable";
import Modal from "../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import AddTeacherForm from "../../features/teachers/addTeacherForm/AddTeacherForm";

const Teachers = () => {
  const [searchBy, setSearchBy] = useState("");
  const [showModal, setShowModal] = useState(false);

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
      <div>
        <Header setSearchBy={setSearchBy} setShowModal={setShowModal} />
        <TeachersTable searchBy={searchBy} />
      </div>
    </>
  );
};

export default Teachers;
