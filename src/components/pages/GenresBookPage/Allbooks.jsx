import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetBooks } from "../../../features/genresBookSlice";
import CartItems from "../../CartItems";
import Skeleton from "../../Skeleton";

const Allbooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.genresBook.books);
  const loading = useSelector((state) => state.genresBook.loading);

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  useEffect(() => {
    dispatch(fetchGetBooks());
  }, [dispatch]);

  return (
    <>
      {loading
        ? skeleton
        : books.map((item) => {
            return <CartItems key={item._id} book={item} />;
          })}
    </>
  );
};

export default Allbooks;
