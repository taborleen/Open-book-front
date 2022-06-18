import React from "react";
import CartItems from "../../CartItems";
import styles from "../DiscountPage/pagination.module.css";

import { Link } from "react-router-dom";

const NewBookPage = ({ elements }) => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/novelties">
              Новинки
            </Link>
          </li>
        </ul>
        <h3>Новинки</h3>
      </div>
      <div className={styles.main}>
        {elements.map((book) => {
          return <CartItems key={book._id} book={book} />;
        })}
      </div>
    </>
  );
};

export default NewBookPage;
