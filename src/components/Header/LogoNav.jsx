import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import imageZakladka from "../../assets/image/bookmark-solid.svg";
import imageBasket from "../../assets/image/cart-shopping-solid.svg";
import imageProf from "../../assets/image/circle-user-solid.svg";
import { BsSearch } from "react-icons/bs";

const LogoNav = ({ setText }) => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  return (
    <div className={styles.bar}>
      <div className={styles.searchForm}>
        <input
          tabIndex="-1"
          placeholder="Поиск книг"
          className={styles.searchInput}
          autoFocus={true}
          onChange={(event) => setText(event)}
        />
        <BsSearch className={styles.searchIcon} />
      </div>

      {token ? (
        <ul className={styles.logoPages}>
          <li>
            <Link to={`/profile/${user}/bookmarks`}>
              <img src={imageZakladka} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/basket">
              <img src={imageBasket} alt="" />
            </Link>
          </li>
          <li>
            <Link to={`/profile/${user}/buyed`}>
              <img src={imageProf} alt="" />
            </Link>
          </li>
        </ul>
      ) : (
        <div className={styles.auth}>
          <Link to="/signup">
            <button className={styles.button}>SIGNUP</button>
          </Link>
          <Link to="/signin">
            <button className={styles.button}>SIGNIN</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LogoNav;
