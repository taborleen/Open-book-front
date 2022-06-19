import styles from "./cart.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../features/cartSlice";
import CartItems from "../CartItems";
import { search } from "../../features/value";

const Carts = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const value = useSelector((state) => state.search.value);

  const book = carts.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      {book.map((item) => {
        return (
          <div className={styles.cartItemsWrapper}>
            {" "}
            <CartItems key={item.id} book={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Carts;
