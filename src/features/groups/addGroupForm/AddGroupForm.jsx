import styles from "./AddGroupForm.module.css";
import {
  InputText,
  InputSelectOptions,
} from "../../../components/ui-component/inputs/Input";
import { useState } from "react";
import Button from "../../../components/ui-component/buttons/Button";

const AddGroupForm = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState(null);
  const [speciality, setSpeciality] = useState(null);

  function resetForm() {
    setName("");
    setTeacher("");
    setSpeciality("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newGroup = {
      name,
      teacher,
      speciality,
      id: Date.now(),
    };

    console.log(newGroup);
    resetForm();
    setShowModal(false);
  }

  function handleCancel() {
    resetForm();
    setShowModal(false);
  }
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <InputText
        label="Group Name"
        placeholder="ALG-web-111"
        value={name}
        setValue={setName}
      />

      <InputSelectOptions />

      <div className={styles.btns}>
        <Button onClick={handleCancel} className="danger">
          Cancel
        </Button>
        <Button type="submit" className="success">
          Create
        </Button>
      </div>
    </form>
  );
};

export default AddGroupForm;
