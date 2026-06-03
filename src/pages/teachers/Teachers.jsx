import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import TeachersTable from "../../features/teachers/teachersTable/TeachersTable";
import Modal from "../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import AddTeacherForm from "../../features/teachers/addTeacherForm/AddTeacherForm";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../redux/slices/teachers/teachersSlice";

const Teachers = () => {
  const [searchBy, setSearchBy] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { loading, teachers } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(getTeachers());
  }, []);

  if (loading) return <h1>Loading</h1>;

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
        {teachers && <TeachersTable searchBy={searchBy} teachers={teachers} />}
      </div>
    </>
  );
};

export default Teachers;
