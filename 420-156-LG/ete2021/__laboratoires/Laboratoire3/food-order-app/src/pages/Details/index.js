import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import MealContext from "../../store/meal-context";

const Details = () => {
  const [meal, setMeal] = useState(null);
  const [category, setCategory] = useState("");
  let { mealId } = useParams();
  let contextData = useContext(MealContext);

  useEffect(() => {
    const { availableMeals, availableCategories } = contextData;

    const currentMeal = availableMeals.find((meal) => {
      return meal.id === parseInt(mealId);
    });

    const currentCategory = availableCategories.find((category) => {
      return category.id === currentMeal?.categoryId;
    });

    if (currentMeal) {
      setMeal(currentMeal);
    }

    if (currentCategory) {
      setCategory(currentCategory.name);
    }
  }, [mealId, contextData]);

  const renderFavouriteBtn = () => {
    if (contextData.isFavourite(meal.id)) {
      return (
        <button
          className={styles["button-cancel"]}
          onClick={() => contextData.removeFavourite(meal.id)}
        >
          Delete favourite
        </button>
      );
    } else {
      return (
        <button
          className={styles.button}
          onClick={() => contextData.addFavourite(meal.id)}
        >
          Save as favourite
        </button>
      );
    }
  };

  const renderCartBtn = () => {
    if (contextData.isAddedInCart(meal.id)) {
      return (
        <button
          className={styles["button-cancel"]}
          onClick={() => contextData.removeCartItem(meal.id)}
        >
          Remove from cart
        </button>
      );
    } else {
      return (
        <button
          className={styles.button}
          onClick={() => contextData.addCartItem(meal.id)}
        >
          Add to cart
        </button>
      );
    }
  };

  if (!meal) {
    return (
      <div className={styles.error}>
        Sorry, the meal you are looking for is not available!
      </div>
    );
  }
  return (
    <>
      <div className={styles["meal-bg"]}>
        <img
          src={meal.image}
          alt="Meal item"
          className={styles["meal-bg-image"]}
        />
      </div>
      <div className={styles["meal-details"]}>
        <div className={styles["meal-details__description"]}>
          <h2>{meal.name}</h2>
          <h3>{meal.price} $</h3>
          <h3>{category}</h3>
          <div className={styles["meal-details__description-text"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div>
          {renderFavouriteBtn()}
          {renderCartBtn()}
        </div>
      </div>
    </>
  );
};

export default Details;
