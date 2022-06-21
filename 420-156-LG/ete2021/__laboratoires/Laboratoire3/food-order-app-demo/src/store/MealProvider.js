import React, { useEffect, useState } from "react";
import { getCategories, getMeals } from "../services/foodService";
import MealContext from "./meal-context";

const MealProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCategories(getCategories());
    setMeals(getMeals());
  }, []);

  function addFavouriteHandler(favouriteId) {
    // TODO
  }

  function removeFavouriteHandler(favouriteId) {
    // TODO
  }

  function addCartItemHandler(itemId) {
    // TODO
  }

  function removeCartItemHandler(itemId) {
    // TODO
  }

  function calculateAmount() {
    let total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return total;
  }

  function isFavourite(itemId) {
    // TODO
  }

  function isAddedInCart(itemId) {
    // TODO
  }

  let context = {
    availableCategories: categories,
    availableMeals: meals,
    popularMeals: meals.filter((meal) => meal.isPopular),

    cartItems,
    favourites,

    addFavourite: addFavouriteHandler,
    addCartItem: addCartItemHandler,

    removeFavourite: removeFavouriteHandler,
    removeCartItem: removeCartItemHandler,

    isFavourite,
    isAddedInCart,

    totalAmount: calculateAmount(),
  };

  return (
    <MealContext.Provider value={context}>
      {props.children}
    </MealContext.Provider>
  );
};

export default MealProvider;
