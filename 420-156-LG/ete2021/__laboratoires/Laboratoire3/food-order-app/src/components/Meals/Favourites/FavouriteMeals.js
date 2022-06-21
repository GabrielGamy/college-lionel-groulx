import MealItem from "../MealItem/MealItem";
import CardSection from "../../UI/Card/CardSection";
import { useContext } from "react";
import MealContext from "../../../store/meal-context";

const FavouriteMeals = () => {
  const contextData = useContext(MealContext);
  if (contextData.favourites.length === 0) {
    return null;
  }
  return (
    <CardSection headerTitle="Your Favourites">
      {contextData.favourites.map((favourite) => (
        <MealItem
          key={favourite.id}
          id={favourite.id}
          name={favourite.name}
          price={favourite.price}
          image={favourite.image}
          saved={contextData.isFavourite(favourite.id)}
          selected={contextData.isAddedInCart(favourite.id)}
        />
      ))}
    </CardSection>
  );
};

export default FavouriteMeals;
