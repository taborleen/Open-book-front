import React from "react";
import CartItems from "../../CartItems";
import styles from "./pagination.module.css";

const AllBookPagination = ({ elements, loading }) => {
  console.log(elements);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={styles.booksWrapper}>
      {elements.map((book) => {
        return <CartItems key={book._id} book={book} />;
      })}
    </div>
  );
};

export default AllBookPagination;
