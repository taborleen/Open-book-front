import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../../features/cartSlice";
import CartItems from "../../CartItems";

import styles from './Profile.module.css'

const Bookmarks = () => {
  const user = useSelector((state) => state.auth.userAuth);
  const books = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const bookmarksBook = books.filter((item) =>
    user.bookmarks.includes(item._id)
  );

  return (
    <div>
      <div>
        <div className={styles.bookmarks}>
          {bookmarksBook.map((book) => {
            return <CartItems key={book._id} book={book}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
