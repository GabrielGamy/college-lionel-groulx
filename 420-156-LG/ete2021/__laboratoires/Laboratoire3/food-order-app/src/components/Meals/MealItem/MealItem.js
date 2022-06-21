import Card from "../../UI/Card/Card";
import LikeIcon from "../../Icons/LikeIcon";
import AddShoppingIcon from "../../Icons/AddShoppingIcon";
import MinusIcon from "../../Icons/MinusIcon";
import { useHistory } from "react-router-dom";

import styles from "./MealItem.module.css";
import { useContext } from "react";
import MealContext from "../../../store/meal-context";

const MealItem = (props) => {
  let history = useHistory();
  let contextData = useContext(MealContext);

  const navigate = () => {
    history.push("/details/" + props.id);
  };

  const toggleFavourite = (event) => {
    event.stopPropagation();
    if (!props.saved) {
      contextData.addFavourite(props.id);
    } else {
      contextData.removeFavourite(props.id);
    }
  };

  const toggleInCart = (event) => {
    event.stopPropagation();
    if (!props.selected) {
      contextData.addCartItem(props.id);
    } else {
      contextData.removeCartItem(props.id);
    }
  };

  return (
    <Card name={props.name} image={props.image} onClickCard={navigate}>
      <div className={styles["meal-content"]}>
        <p>${props.price}$</p>
        <div className={styles["meal-content__icons"]}>
          <div onClick={toggleFavourite}>
            <LikeIcon saved={props.saved} />
          </div>
          <div onClick={toggleInCart}>
            {!props.selected && <AddShoppingIcon />}
            {props.selected && <MinusIcon />}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MealItem;
