import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const NewsSlider = ({ item }) => {
  return (
    <div className="container">
      <div key={item._id} className={styles.newsSlider}>
        <div className={styles.sliderImg}>
          <img src={item.image[0]} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.desk}>
            <p>{item.description}</p>
          </div>
          <div className={styles.btn}>
            <Link to={`/books/${item._id}`}>
              <button>Перейти</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
