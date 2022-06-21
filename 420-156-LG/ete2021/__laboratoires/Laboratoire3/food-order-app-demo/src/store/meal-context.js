/**
 * a-	API Context – meal-context.js
 * */
import { createContext } from "react";

const MealContext = createContext({
  availableCategories: [],
  availableMeals: [],
  popularMeals: [],
  favourites: [],
  cartItems: [],
  addFavourite: (favouriteId) => {},
  removeFavourite: (favouriteId) => {},
  addCartItem: (itemId) => {},
  removeCartItem: (itemId) => {},
  isFavourite: (itemId) => {},
  isAddedInCart: (itemId) => {},
  totalAmount: 0,
});

export default MealContext;
