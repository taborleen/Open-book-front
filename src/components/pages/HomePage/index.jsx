import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchCart } from "../../../features/cartSlice";
import styles from "./HomePage.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import NewsSlider from "./NewsSlider";
import AboutUs from "./AboutUs";
import CartItems from "../../CartItems";
import { fetchDiscountBooks } from "../../../features/discountBookSlice";

const HomePage = () => {
  const books = useSelector((state) => state.cart.carts);
  const discountBooks = useSelector(
    (state) => state.discountBook.discountBooks
  );
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const settings2 = {
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

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchDiscountBooks());
  }, [dispatch]);

  const newBooks = books.filter((item) => item.publicationYear === "2022");

  return (
    <>
      <Slider {...settings}>
        {newBooks.map((item, index) => {
          if (index < 5) {
            return <NewsSlider key={item._id} item={item} />;
          }
        })}
      </Slider>
      <AboutUs />
      <div className="container">
        <div className={styles.bestBooks}>
          <h2>Лучшие книги</h2>
          <Slider {...settings2}>
            {books.map((item) => {
              return <CartItems key={item.id} book={item} />;
            })}
          </Slider>
        </div>
      </div>
      <div className={styles.discounts}>
        <div className="container">
          <h2>Скидки</h2>
          <Slider {...settings2}>
            {discountBooks.map((item) => {
              return <CartItems key={item.id} book={item} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomePage;
