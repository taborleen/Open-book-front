import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import imageZakladka from "../../assets/image/bookmark-solid.svg";
import imageBasket from "../../assets/image/cart-shopping-solid.svg";
import imageProf from "../../assets/image/circle-user-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { doLogin, fetchOneUser } from "../../features/auth";
import { search } from '../../features/value';
import Carts from "../CartItems/Carts";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [searchBook, setSearchBook] = useState(false)
  const [text, Text] = useState("")

  const navigate = useNavigate();
  
  const isActive = text.length > 0 ? true : false


  useEffect(() => {
    if(isActive){
      return navigate("/searchBook")
    }
  }, [isActive])

 //{isActive && navigate("/searchBook")}
  const setText = (event) => {
    //console.log(event.target.value);
    dispatch(search(event.target.value))
    Text(event.target.value)
  }
//
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.nameShop}>
          <h2>Booksment</h2>
          <input autoFocus={true} onChange={(event)=> setText(event)}/>
        
        </div>
        <div className={styles.pages}>
          <ul className={styles.textPages}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to="/allBooks"
              >
                Главная
              </NavLink>
            </li>
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
                to="/authors"
              >
                Авторы
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to="/forum"
              >
                Форум
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
                  <Link to={`/profile/${user}`}>
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
        </div>
      </div>
    </div>
  );
};

export default Header;
