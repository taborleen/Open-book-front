import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetBooks } from "../../../features/genresBookSlice";
import CartItems from "../../CartItems";

import styles from "./Genre.module.css";

const Allbooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.genresBook.books);

  useEffect(() => {
    dispatch(fetchGetBooks());
  }, [dispatch]);
  return (
    <>
      {books.map((item) => {
        return <CartItems key={item._id} book={item} />;
      })}
    </>
  );
};

export default Allbooks;
