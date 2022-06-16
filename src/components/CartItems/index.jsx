import styles from "./cart.module.css";
import React from "react";

const CartItems = (props) => {
  let price = props.item.price - (props.item.price / 100) * props.item.discount;
  let newPrice = Math.floor(price);
  return (
    <div className={styles.cart}>
      <div>
        <img src={props.item.image[0]} alt="" />
      </div>
      <div>{props.item.author.name}</div>
      <div>{props.item.name}</div>
      <div>
        {props.item.discount > 0 ? (
          <div>
            <div>{newPrice}</div>
            <div>{props.item.price}</div>
          </div>
        ) : (
          props.item.price
        )}
      </div>
    </div>
  );
};

export default CartItems;
