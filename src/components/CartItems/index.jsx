import styles from "./cart.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { editBookmarks } from "../../features/usersSlice";

const CartItems = ({ book }) => {
  const newPrice = book.price - (book.price / 100) * book.discount;
  const id = useSelector((state) => state.auth.user);
  const checked = useSelector((state) => state.user.checked);
  const dispatch = useDispatch();

  const addToBokmarks = (bookId) => {
    dispatch(editBookmarks({ bookId, id }));
  };

  const removeFromBookmarks = () => {};

  return (
    <Link to={`/books/${book._id}`}>
      <>
        <div className={styles.cart}>
          {!checked ? (
            <div
              onClick={() => addToBokmarks(book._id)}
              className={styles.bookmark}
            >
              {<BsFillBookmarkFill size="2em" />}
            </div>
          ) : (
            <div onClick={removeFromBookmarks} className={styles.bookmark}>
              {<BsFillBookmarkCheckFill size="2em" />}
            </div>
          )}
          <div className={styles.image}>
            <img src={book.image[0]} alt="" />
          </div>
          <div className={styles.content}>
            <div className={styles.author}>{book.author.name}</div>
            <h4 className={styles.title}>{book.name}</h4>
            <div className={styles.buy}>
              {book.discount > 0 ? (
                <div>
                  <span className={styles.discount}>
                    {Math.floor(newPrice)}₽
                  </span>
                  <strike className={styles.price}>{book.price}₽</strike>
                </div>
              ) : (
                <span className={styles.price}>{book.price}₽</span>
              )}
              <button className={styles.btn}>
                <span>Купить</span>
                <FaShoppingCart />
              </button>
            </div>
          </div>
          {book.discount > 0 && (
            <div className={styles.discountPercent}>
              <span>{book.discount}%</span>
            </div>
          )}
        </div>
      </>
    </Link>
  );
};

export default CartItems;
