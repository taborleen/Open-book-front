import { useDispatch, useSelector } from "react-redux";
import { getBookById } from "../../../features/bookReducer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Reviews from "./Reviews";
import SimilarBooks from "./SimilarBooks";
import ChosenBook from "./ChosenBook";
import styles from "./books.module.css";

const Book = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const book = useSelector((state) => {
    return state.bookById.books.find((b) => {
      if (!id) return true;

      return b._id === id;
    });
  });
  useEffect(() => {
    dispatch(getBookById(id));
  }, [dispatch, id]);

  if (!book) {
    return "loading";
  }

  return (
    <div className={styles.container}>
      <ChosenBook book={book} key={book._id} />
      <Reviews bookId={book._id} genres={book.genres._id} book={book._id} />
      <SimilarBooks bookId={book._id} genres={book.genres._id} key={book._id} />
    </div>
  );
};

export default Book;
