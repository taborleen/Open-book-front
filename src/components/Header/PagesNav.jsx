import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const PagesNav = () => {
  return (
    <ul className={styles.textPages}>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to="/genres"
        >
          Жанры
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to="/novelties"
        >
          Новинки
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to="/best"
        >
          Лучшие
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to="/discounts"
        >
          Скидки
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to="/contacts"
        >
          Контакты
        </NavLink>
      </li>
    </ul>
  );
};

export default PagesNav;
