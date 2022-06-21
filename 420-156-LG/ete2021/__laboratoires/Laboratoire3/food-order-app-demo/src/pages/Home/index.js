import FavouriteMeals from "../../components/Meals/Favourites/FavouriteMeals";
import MealCategories from "../../components/Meals/MealCategory/MealCategories";
import MealsSummary from "../../components/Meals/MealSummary/MealsSummary";
import PopularMeals from "../../components/Meals/PopularMeals/PopularMeals";

const Home = (props) => {
  return (
    <>
      <MealsSummary />
      <MealCategories />
      <PopularMeals />
      <FavouriteMeals />
    </>
  );
};

export default Home;
