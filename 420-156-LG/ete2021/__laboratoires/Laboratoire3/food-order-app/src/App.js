import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import DetailsPage from "./pages/Details";
import HomePage from "./pages/Home";
import ListingPage from "./pages/Listing";
import NotFoundPage from "./pages/NotFound";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/listing">
          <ListingPage />
        </Route>
        <Route path="/details/:mealId">
          <DetailsPage />
        </Route>
        <Route path="/">
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
