import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../../features/inputReducer";
import styles from "./books.module.css"


const Reviews = ({ bookId }) => {
  const [text, setText] = useState("");
  const reviews = useSelector((state) => state.review.reviews);
  const [optionsValue, setOptionsValue] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addReview({ text, bookId, optionsValue }));
    setText("");
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const optionsHandler = (e) => {
    setOptionsValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <input
          className={styles.input}
          type="text"
          placeholder="text here"
          value={text}
          onChange={inputHandler}
        />
        <button className={styles.inputBtn}>Отправить</button>
        <select onChange={optionsHandler}>
          <option disabled>Выберите героя</option>
          <option selected value={1}>1</option>
          <option  value={2}>
            2
          </option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </form>
      <div className="reviews" >
        {reviews.map((item) => {
          return (
            <>
              <div>{item.text}</div>
              <span>{item.grade}</span>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Reviews;
