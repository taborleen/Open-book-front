import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewBooks } from "../../../features/newBooksSlice";
import CartItems from "../../CartItems";
import styles from "../../CartItems/cart.module.css";
import Skeleton from "../../Skeleton";
import Breadcrumbs from "../../BreadСrumbs";

const NewBookPage = () => {
  const newBooks = useSelector((state) => state.newBook.newBooks);
  const loading = useSelector((state) => state.newBook.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  const result = newBooks.filter((book) => {
    if (book.publicationYear === "2022") {
      return true;
    }
    return false;
  });

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
          : result.map((book) => {
              return <CartItems key={book._id} book={book} />;
            })}
      </div>
    </>
  );
};

export default NewBookPage;
