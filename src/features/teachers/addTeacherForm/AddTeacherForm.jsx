import styles from "./AddTeacherForm.module.css";
import { InputText } from "../../../components/ui-component/inputs/Input";
import { useState } from "react";
import Button from "../../../components/ui-component/buttons/Button";

const AddTeacherForm = ({ setShowModal }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

  function resetForm() {
    setFirstname("");
    setLastname("");
    setPhone("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTeacher = {
      firstname,
      lastname,
      phone,
      id: Date.now(),
    };

    console.log(newTeacher);
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
        label="Firstname"
        placeholder="John"
        value={firstname}
        setValue={setFirstname}
      />
      <InputText
        label="Lastname"
        placeholder="Doe"
        value={lastname}
        setValue={setLastname}
      />
      <InputText
        label="Phone"
        placeholder="998901234567"
        value={phone}
        setValue={setPhone}
      />
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

export default AddTeacherForm;
