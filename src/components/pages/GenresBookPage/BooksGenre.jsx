import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../../features/genresBookSlice";
import CartItems from "../../CartItems";
import GenrePage from "./GenrePage";
import styles from "./Genre.module.css";

const BooksGenre = () => {
  const { genreId } = useParams();

  const books = useSelector((state) => state.genresBook.book);
  

  const dispatch = useDispatch();


  useEffect(() => {
    if (genreId) {
      dispatch(fetchBooks(genreId));
    }
  }, [dispatch, genreId]);

  return (
    <div className={styles.content}>
      <GenrePage />
      <div className={styles.book}>
        {books.map((item) => {
          return <CartItems key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default BooksGenre;
