import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestBook } from "../../../features/bestBookSlice";
import BreadCrumbs from "../../BreadСrumbs";
import CartItems from "../../CartItems";
import Skeleton from "../../Skeleton";

import styles from "../../CartItems/cart.module.css";

const BestBook = () => {
  const dispatch = useDispatch();
  const ratingBook = useSelector((state) => state.bestBook.bestBook);
  const loading = useSelector((state) => state.bestBook.loading);

  useEffect(() => {
    dispatch(fetchBestBook());
  }, [dispatch]);

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const best = ratingBook.filter((item) => item.rating.length);

  return (
    <>
      <BreadCrumbs link="/best" linkName="Лучшие" />
      <h1 className={styles.title}>Лучшие книги</h1>
      <div className={styles.main}>
        {loading
          ? skeleton
          : best.map((item) => {
              return <CartItems key={item._id} book={item} />;
            })}
      </div>
    </>
  );
};

export default BestBook;
