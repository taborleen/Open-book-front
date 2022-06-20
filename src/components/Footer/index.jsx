import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/booksment-logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInfo}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <ul className={styles.info}>
            <li>
              <NavLink className={styles.link} to="/">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/genres">
                Жанры
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/novelties">
                Новинки
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/discounts">
                Скидки
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/contacts">
                Контакты
              </NavLink>
            </li>
          </ul>
          <div>+7 928 021 34 21</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
