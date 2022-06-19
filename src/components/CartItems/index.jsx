import styles from "./cart.module.css";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { editBookmarks, removeBookmark } from "../../features/auth";
import AuthMessage from "../AuthMessage";

const CartItems = ({ book }) => {
  const newPrice = book.price - (book.price / 100) * book.discount;
  const bookId = book._id;
  const user = useSelector((state) => state.auth.userAuth);
  const dispatch = useDispatch();

  // const checkedBook = user.bookmarks?.find((item) => item === bookId);

  const addToBokmarks = () => {
    dispatch(editBookmarks({ bookId }));
  };

  const removeFromBookmarks = () => {
    dispatch(removeBookmark({ bookId }));
  };

  return (
    <>
      <div className={styles.cart}>
        {/* {!checkedBook ? (
          <BsFillBookmarkFill
            className={styles.bookmark}
            size="2.2em"
            onClick={() => addToBokmarks()}
          />
        ) : (
          <BsFillBookmarkCheckFill
            className={styles.bookmark}
            size="2.2em"
            onClick={() => removeFromBookmarks()}
          />
        )} */}
        <div className={styles.image}>
          <Link to={`/books/${book._id}`}>
            <img src={book.image[0]} alt="" />
          </Link>
        </div>
        <div className={styles.content}>
          <div className={styles.author}>{book.author.name}</div>
          <h4 className={styles.name}>{book.name}</h4>
          <div className={styles.buy}>
            {book.discount > 0 ? (
              <div>
                <span className={styles.discount}>{Math.floor(newPrice)}₽</span>
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
  );
};

export default CartItems;
