import PopularMeal from "./PopularMeal";
import CardSection from "../../UI/Card/CardSection";
import { useContext } from "react";
import MealContext from "../../../store/meal-context";

const PopularMeals = () => {
  const MealCtx = useContext(MealContext);
  return (
    <CardSection headerTitle="Most Popular">
      {MealCtx.popularMeals.map((meal) => (
        <PopularMeal
          key={meal.id}
          id={meal.id}
          name={meal.name}
          price={meal.price}
          image={meal.image}
        />
      ))}
    </CardSection>
  );
};

export default PopularMeals;
