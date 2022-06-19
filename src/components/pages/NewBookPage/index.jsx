import React, { useEffect } from "react";
import CartItems from "../../CartItems";
import styles from "../../CartItems/cart.module.css";
import Skeleton from "../../Skeleton";
import Breadcrumbs from "../../BreadСrumbs";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewBooks } from "../../../features/newBooksSlice";

const NewBookPage = ({ elements }) => {
  const loading = useSelector((state) => state.newBook.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <Breadcrumbs link="/novelties" linkName="Новинки" />
      <h1 className={styles.title}>Новинки</h1>
      <div className={styles.main}>
        {loading
          ? skeleton
          : elements.map((book) => {
              return <CartItems key={book._id} book={book} />;
            })}
      </div>
    </>
  );
};

export default NewBookPage;
