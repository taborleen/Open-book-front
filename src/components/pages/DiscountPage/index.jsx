import React from "react";
import CartItems from "../../CartItems";
import styles from "../../CartItems/cart.module.css";

function DiscountPage({ elements, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={styles.main}>
      {elements.map((bookDis) => {
        return <CartItems key={bookDis._id} book={bookDis} />;
      })}
    </div>
  );
}

export default DiscountPage;
