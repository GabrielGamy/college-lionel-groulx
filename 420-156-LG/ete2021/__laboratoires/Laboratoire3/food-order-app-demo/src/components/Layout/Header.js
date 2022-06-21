import React from "react";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles["menu-left"]}>OrderFood App</header>
        <ul className={styles["menu-right"]}>
          <li className={styles["menu-right__item"]}>
            <Link to="/" className={styles["menu-right__item-link"]}>
              Meals
            </Link>
          </li>
          <li className={styles["menu-right__item"]}>
            <Link to="/listing" className={styles["menu-right__item-link"]}>
              Listing
            </Link>
          </li>
          <li className={styles["menu-right__item"]}>
            <HeaderCartButton onClick={props.onShowCart} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
