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
    let alreadyExist =
      favourites.filter((favourite) => {
        return favourite.id === favouriteId;
      }).length > 0;

    if (!alreadyExist) {
      let theFavourite = meals.find((meal) => meal.id === favouriteId);
      if (theFavourite) {
        setFavourites((prevState) => {
          return [...prevState, theFavourite];
        });
      }
    }
  }

  function removeFavouriteHandler(favouriteId) {
    setFavourites((prevState) => {
      return prevState.filter((item) => item.id !== favouriteId);
    });
  }

  function addCartItemHandler(itemId) {
    let alreadyExist =
      cartItems.filter((item) => {
        return item.id === itemId;
      }).length > 0;

    if (!alreadyExist) {
      let theItem = meals.find((meal) => meal.id === itemId);
      if (theItem) {
        setCartItems((prevState) => {
          return [...prevState, theItem];
        });
      }
    }
  }

  function removeCartItemHandler(itemId) {
    setCartItems((prevState) => {
      return prevState.filter((item) => item.id !== itemId);
    });
  }

  function calculateAmount() {
    let total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return total;
  }

  function isFavourite(itemId) {
    return favourites.filter((item) => item.id === itemId).length > 0;
  }

  function isAddedInCart(itemId) {
    return cartItems.filter((item) => item.id === itemId).length > 0;
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
