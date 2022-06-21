import { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import MealContext from "../../store/meal-context";

const Cart = (props) => {
  const contextData = useContext(MealContext);

  const totalAmount = `$${contextData.totalAmount.toFixed(2)}`;
  const hasItems = contextData.cartItems.length > 0;

  const cartItemRemoveHandler = (id) => {
    contextData.removeCartItem(id);
  };

  const cartItemAddHandler = (item) => {
    contextData.addCartItem(item.id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {contextData.cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={1}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
