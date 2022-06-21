import styles from "./MealsSummary.module.css";
import backgroundImage from "../../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg";

const MealsSummary = () => {
  return (
    <>
      <div className={styles["summary-bg-image"]}>
        <img
          src={backgroundImage}
          alt="A full background"
          width="100%"
          height="100%"
        />
      </div>
      <section className={styles.summary}>
        <h2>Your favourite food, delivered</h2>
        <p>
          Get it delivered right to your door. Or, try Pickup on your way home.
          It’s mealtime on your time.
        </p>
        <p>
          Select your items and fill up your cart. All our meals are cooked with
          high-quality ingredients, just-in-time and of course by experienced
          chefs!
        </p>
      </section>
    </>
  );
};

export default MealsSummary;
