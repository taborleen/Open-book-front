import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import imageZakladka from "../../assets/image/bookmark-solid.svg";
import imageBasket from "../../assets/image/cart-shopping-solid.svg";
import imageProf from "../../assets/image/circle-user-solid.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nameShop}>
        <h2>Booksment</h2>
      </div>
      <div className={styles.pages}>
        <ul className={styles.textPages}>
          <li>
            <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/genres">
              Жанры
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/novelties">
              Новинки
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/best">
              Лучшие
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/discounts">
              Скидки
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/forum">
              Форум
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} to="/contacts">
              Контакты
            </NavLink>
          </li>
        </ul>
        <ul className={styles.logoPages}>
          <li>
            <Link to="/favorites">
              <img src={imageZakladka} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/basket">
              <img src={imageBasket} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={imageProf} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
