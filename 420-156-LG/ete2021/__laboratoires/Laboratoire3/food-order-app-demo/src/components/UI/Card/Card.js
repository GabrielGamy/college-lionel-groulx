import styles from "./Card.module.css";

const Card = (props) => {
  const onClickCard = () => {
    if (props.onClickCard) {
      props.onClickCard();
    }
  };

  return (
    <div className={styles["card"]} onClick={onClickCard}>
      <img
        src={props.image}
        alt="food category"
        className={styles["card-image"]}
      />
      <div className={styles["card-description"]}>
        <h4 className={styles["card-description__title"]}>
          <b>{props.name}</b>
        </h4>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
