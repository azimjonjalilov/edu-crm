import styles from "./Header.module.css";
import { InputSearch } from "../ui-component/inputs/Input";
import Button from "../ui-component/buttons/Button";

const Header = ({
  placeholder = "search by name or phone number",
  setSearchBy,
  setShowModal,
}) => {
  return (
    <div className={styles.container}>
      <InputSearch placeholder={placeholder} setValue={setSearchBy} />
      <Button className="success" onClick={() => setShowModal(true)}>
        Create
      </Button>
    </div>
  );
};

export default Header;
