import styles from "./cart.module.css";
import React from "react";
import { Link } from "react-router-dom";

const CartItems = (props) => {
  return (
    <Link to={`/books/${props.item._id}`}>
    <div className={styles.cart}>
      <div>
        <img src={props.item.image[0]} alt="" />
      </div>
      <div>{props.item.author.name}</div>
      <div>{props.item.name}</div>
      <div>{props.item.price}</div>
    </div>
    </Link>
  );
};

export default CartItems;
