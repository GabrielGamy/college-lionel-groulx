import styles from "./Card.module.css";

const CardSection = (props) => {
  return (
    <>
      <h2 className={styles["card-section-header"]}>{props.headerTitle}</h2>
      <section className={styles["card-section-listing"]}>
        {props.children}
      </section>
    </>
  );
};

export default CardSection;
