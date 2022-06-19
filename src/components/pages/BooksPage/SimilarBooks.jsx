import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../../features/similarBooksReducer";
import CartItems from "../../CartItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import styles from "./books.module.css";
import { sliderClasses } from "@mui/material";

const SimilarBooks = ({ book }) => {
  const dispatch = useDispatch();
  const getAll = useSelector((state) => state.similarBook.books);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);
  const filtered = getAll.filter(
    (item) => item.genres._id === book.genres._id && item._id !== book._id
  );

  const settings = {
    className: "center",
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    prevArrow: <BsFillArrowLeftCircleFill fill="black" />,
    nextArrow: <BsFillArrowRightCircleFill fill="black" />,
  };

  return (
    <div>
      <h1 className={styles.titleSimilar}>Похожие книги</h1>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {filtered.map((item) => {
            return <CartItems key={item._id} book={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SimilarBooks;
