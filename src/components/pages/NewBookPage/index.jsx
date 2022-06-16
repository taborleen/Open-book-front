import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewBooks } from "../../../features/newBooksSlice";
import CartItems from "../../CartItems";
import styles from "../../CartItems/cart.module.css";
import { Link } from "react-router-dom";

const NewBookPage = () => {
  const newBooks = useSelector((state) => state.newBook.newBooks);
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

  return (
    <>
      <div>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/novelties">
              Новинки
            </Link>
          </li>
        </ul>
        <h3>Новинки</h3>
      </div>
      <div className={styles.main}>
        {result.map((book) => {
          return <CartItems key={book._id} book={book} />;
        })}
      </div>
    </>
  );
};

export default NewBookPage;
