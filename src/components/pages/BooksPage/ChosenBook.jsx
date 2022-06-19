import { Carousel } from "react-responsive-carousel";
import styles from "./books.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const ChosenBook = ({ book }) => {
  const reviews = useSelector((state) => state.review.reviews);

  const reviewsFind = reviews.filter((elem) => elem.book._id === book._id);
  const rating = Math.floor(
    reviewsFind.reduce((sum, item) => {
      return sum + item.grade;
    }, 0) / reviewsFind.length
  );

  return (
    <>
      <div className={styles.main}>
        <div className={styles.pic}>
          <Carousel infiniteLoop autoPlay onSwipeMove>
            {book.image.map((img, index) => {
              return (
                <div key={book._id}>
                  <img src={img} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className={styles.bookContent}>
          <Link to={`/authors/${book.author._id}`}>
            <div className={styles.authorName}>{book.author.name}</div>
          </Link>
          <div className={styles.nameOfTheBook}>{book.name}</div>
          <Rating name="read-only" value={rating} readOnly />
          <div className={styles.inStock}>
            {book.left > 0 ? "✔️  В наличии" : "✖️ Нет в наличии"}
          </div>
          <div className={styles.priceAndBtn}>
            <span className={styles.price}>{book.price}</span>{" "}
            <button className={styles.btn}>В корзину</button>
          </div>
          <div>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td className={styles.text}>Жанр</td>
                  <td className={styles.text}>{book.genres.name}</td>
                </tr>
                <tr>
                  <td className={styles.text}>Год публикации</td>
                  <td className={styles.text}>{book.publicationYear}</td>
                </tr>
                <tr>
                  <td className={styles.text}>Количество страниц</td>
                  <td className={styles.text}>{book.amountPages}</td>
                </tr>
                <tr>
                  <td className={styles.text}>Тип обложки</td>
                  <td className={styles.text}>{book.coverType}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.descr}>{book.description}</div>
    </>
  );
};

export default ChosenBook;
