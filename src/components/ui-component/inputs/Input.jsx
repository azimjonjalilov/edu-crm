import styles from "./Input.module.css";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const InputPassword = ({
  label = "Password",
  placeholder = "",
  value,
  setValue = function () {},
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.password}>
      <label htmlFor={label}>{label}</label>
      <div>
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          id={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" onClick={() => setShow((prev) => !prev)}>
          {show ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
    </div>
  );
};

export const InputEmail = ({
  label = "Email",
  placeholder = "",
  value,
  setValue = function () {},
}) => {
  return (
    <div className={styles.email}>
      <label htmlFor={label}>{label}</label>
      <input
        type="email"
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
