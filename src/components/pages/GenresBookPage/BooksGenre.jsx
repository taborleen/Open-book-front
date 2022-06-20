import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenresBooks } from "../../../features/genresBookSlice";
import CartItems from "../../CartItems";
import Skeleton from "../../Skeleton";

import styles from "./Genre.module.css";

const BooksGenre = () => {
  const { id } = useParams();

  const books = useSelector((state) => state.genresBook.books);
  const loading = useSelector((state) => state.genresBook.loading);
  const dispatch = useDispatch();

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  useEffect(() => {
    dispatch(fetchGenresBooks(id));
  }, [dispatch, id]);

  return (
    <div className={styles.cartsWrapper}>
      <div className={styles.carts}>
        {loading
          ? skeleton
          : books.map((item) => {
              return <CartItems key={item._id} book={item} />;
            })}
      </div>
    </div>
  );
};

export default BooksGenre;
