import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchCart } from "../../../features/cartSlice";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const books = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const newBooks = books.filter((item) => item.publicationYear === "2022");

  return (
    <>
      {newBooks.map((item) => {
        return (
          <div key={item._id} className={styles.newsSlider}>
            <Slider {...settings}>
              <div>
                <div>
                  <img src={item.image[0]} alt="" />
                </div>
                <div className={styles.content}>
                  <div>
                    <p>{item.description}</p>
                  </div>
                  <button>
                    <Link to={`/books/${item._id}`}>Перейти</Link>
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        );
      })}
    </>
  );
};

export default HomePage;
