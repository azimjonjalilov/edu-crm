import styles from "./Button.module.css";

const Button = ({ children, className = "", type = "button" }) => {
  return (
    <button type={type} className={styles[className]}>
      {children}
    </button>
  );
};

export default Button;
