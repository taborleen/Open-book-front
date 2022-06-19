import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import BreadCrumbs from "../../BreadСrumbs";
import CartItems from "../../CartItems";
import styles from "../../CartItems/cart.module.css";
import Skeleton from "../../Skeleton";

function DiscountPage({elements}) {
  const loading = useSelector((state) => state.discountBook.loading);

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <BreadCrumbs link="/discounts" linkName="Скидки" />
      <h1 className={styles.title}>Скидки %</h1>
      <div className={styles.main}>
        {loading
          ? skeleton
          :       elements.map((bookDis) => {
            return <CartItems key={bookDis._id} book={bookDis} />;
          })}
      </div>
    </>
  );
}

export default DiscountPage;
