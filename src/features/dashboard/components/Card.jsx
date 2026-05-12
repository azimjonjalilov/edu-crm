import styles from "./Card.module.css";

const Card = ({ info }) => {
  return (
    <div className={styles.card}>
      <span>{info.total}</span>
      <span>{info.title}</span>
    </div>
  );
};

export default Card;
