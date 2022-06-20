import styles from "./cart.module.css";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { editBookmarks, removeBookmark } from "../../features/usersSlice";
import {postBookToBasket, fetchGetBasketBooks} from "../../features/basketSlice"
import {
  editBookmarks,
  fetchOneUser,
  removeBookmark,
} from "../../features/auth";

const CartItems = ({ book }) => {
  const newPrice = Math.floor(book.price - (book.price / 100) * book.discount);
  const bookId = book._id;
  const user = useSelector((state) => state.auth.userAuth);
  const id = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user)

useEffect(() => {
  dispatch(fetchGetBasketBooks())
}, [dispatch])
 const basket = useSelector((state) => state.basketBookSlice.basket)
  let basketId
 const basketUser = basket.map((item)=> {
  if(item.userId === userId){
    basketId = item._id
  }
  return basketId
})
 

  const checkedBook = user.hasOwnProperty("bookmarks")
    ? user.bookmarks.find((item) => item === bookId)
    : false;

  const addToBokmarks = () => {
    dispatch(editBookmarks({ bookId }));
  };


  const bookShop = (bookId) => {
    dispatch(postBookToBasket({basketId, bookId}))
  }

  const removeFromBookmarks = () => {
    dispatch(removeBookmark({ bookId }));
  };

  return (
    <>
      <div className={styles.cart}>
        {!checkedBook ? (
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
        )}
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
                <span className={styles.discount}>{newPrice}₽</span>
                <strike className={styles.price}>{book.price}₽</strike>
              </div>
            ) : (
              <span className={styles.price}>{book.price}₽</span>
            )}
            <button onClick={() => bookShop(book._id, newPrice)} className={styles.btn}>
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
