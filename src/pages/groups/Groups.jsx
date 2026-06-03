import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import GroupsTable from "../../features/groups/groupsTable/GroupsTable";
import Modal from "../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import AddGroupForm from "../../features/groups/addGroupForm/AddGroupForm";

import { useDispatch, useSelector } from "react-redux";
import { getGroups } from "../../redux/slices/groups/groupsSlice";

const Groups = () => {
  const [searchBy, setSearchBy] = useState("");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const { loading, groups } = useSelector((state) => state.groups);

  useEffect(() => {
    dispatch(getGroups());
  }, []);

  if (loading) return <h1>Loading</h1>;

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
      <div>
        <Header
          setSearchBy={setSearchBy}
          setShowModal={setShowModal}
          placeholder="search by name"
        />
        {groups && <GroupsTable searchBy={searchBy} groups={groups} />}
      </div>
    </>
  );
};

export default Groups;
