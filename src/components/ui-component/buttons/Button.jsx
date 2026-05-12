import styles from "./Button.module.css";

const Button = ({
  children,
  className = "",
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button type={type} onClick={onClick} className={styles[className]}>
      {children}
    </button>
  );
};

export default Button;
