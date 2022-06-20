import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./BreadCrumbs.module.css";

const BreadCrumbs = ({ link, linkName }) => {
  return (
    <ul className={styles.links}>
      <li>
        <NavLink className={styles.link} to="/">
          Главная
        </NavLink>
      </li>
      <li>›</li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
          to={link}
        >
          {linkName}
        </NavLink>
      </li>
    </ul>
  );
};

export default BreadCrumbs;
