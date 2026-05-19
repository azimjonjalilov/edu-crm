import { useState } from "react";
import Header from "../../components/header/Header";
import GroupsTable from "../../features/groups/groupsTable/GroupsTable";
import Modal from "../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";
import AddGroupForm from "../../features/groups/addGroupForm/AddGroupForm";

const Groups = () => {
  const [searchBy, setSearchBy] = useState("");
  const [showModal, setShowModal] = useState(false);

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
        <GroupsTable searchBy={searchBy} />
      </div>
    </>
  );
};

export default Groups;
