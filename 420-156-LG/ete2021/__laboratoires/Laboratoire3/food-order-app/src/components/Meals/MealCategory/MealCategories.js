import MealCategory from "./MealCategory";
import CardSection from "../../UI/Card/CardSection";
import { useContext } from "react";
import MealContext from "../../../store/meal-context";

const MealCategories = () => {
  const MealCtx = useContext(MealContext);
  return (
    <CardSection headerTitle="Food Categories">
      {MealCtx.availableCategories.map((category) => (
        <MealCategory
          key={category.id}
          name={category.name}
          nbMeals={
            MealCtx.availableMeals.filter(
              (meal) => meal.categoryId === category.id
            ).length
          }
          image={category.image}
        />
      ))}
    </CardSection>
  );
};

export default MealCategories;
