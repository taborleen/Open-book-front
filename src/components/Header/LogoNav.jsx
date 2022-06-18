import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import imageZakladka from "../../assets/image/bookmark-solid.svg";
import imageBasket from "../../assets/image/cart-shopping-solid.svg";
import imageProf from "../../assets/image/circle-user-solid.svg";

const LogoNav = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  return (
    <ul className={styles.logoPages}>
      <li>
        <Link to={`/profile/${user}/bookmarks`}>
          <img src={imageZakladka} alt="" />
        </Link>
      </li>
      {token ? (
        <>
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
        </>
      ) : (
        <>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default LogoNav;
