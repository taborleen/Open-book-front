//import styles from "./cart.module.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchAuthorBook, fetchBooks } from "../../features/authorSlice";
import CartItems from "../CartItems";
import styles from "./author.module.css";

const AuthorBook = () => {
  const dispatch = useDispatch();
  const author = useSelector((state) => state.author.author);
  const book = useSelector((state) => state.author.book);
  const { id } = useParams();

  const [get, setGet] = useState(false);

  useEffect(() => {
    dispatch(fetchAuthorBook(id));
    dispatch(fetchBooks(id));
  }, [dispatch, id]);

  return (
    <>
      <div>
        <div className={styles.header}>
          <div className={styles.img}>
            <img src={author.photo} alt="" />
          </div>
          <div className={styles.data}>
            <h1>{author.name}</h1>
            <div>
              <p>{author.description}</p>
            </div>
          </div>
        </div>
        <h2 className={styles.subtitle}>Библиография автора:</h2>
        <div className={styles.booksAuthor}>
          {book.map((item) => {
            return <CartItems key={item.id} book={item} />;
          })}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default AuthorBook;
