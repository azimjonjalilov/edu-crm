import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./GroupNavbar.module.css";
import Button from "../ui-component/buttons/Button";
import Modal from "../../components/modal/Modal";
import { FaXmark } from "react-icons/fa6";

const GroupNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal>
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
          <h1>Add Student for group</h1>
        </Modal>
      )}
      <div className={styles.container}>
        <ul>
          <li>
            <NavLink
              end
              to=""
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Davomat
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="coins"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Baho
            </NavLink>
          </li>
        </ul>

        <Button className={"success"} onClick={() => setShowModal(true)}>
          Add Student
        </Button>
      </div>
    </>
  );
};

export default GroupNavbar;
