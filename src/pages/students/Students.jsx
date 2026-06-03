import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import StudentsTable from "../../features/students/studentsTable/StudentsTable";
import Modal from "../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import AddStudentForm from "../../features/students/addStudentForm/AddStudentForm";

import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../redux/slices/students/studentsSlice";

const Students = () => {
  const [searchBy, setSearchBy] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { loading, students } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(getStudents());
  }, []);

  if (loading) return <h1>Loading</h1>;

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
        {students && <StudentsTable searchBy={searchBy} students={students} />}
      </div>
    </>
  );
};

export default Students;
