import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenresBooks } from "../../../features/genresBookSlice";

import CartItems from "../../CartItems";
import styles from "./Genre.module.css";

const BooksGenre = () => {
  const { id } = useParams();

  const books = useSelector((state) => state.genresBook.books);


  const dispatch = useDispatch();


  useEffect(() => {
      dispatch(fetchGenresBooks(id));

  }, [dispatch, id]);

  return (
    <div className={styles.content}>
      <div className={styles.book}>

        {books.map((item) => {
          return <CartItems key={item._id} book={item} />;
        })}
      </div>
    </div>
  );
};

export default BooksGenre;
