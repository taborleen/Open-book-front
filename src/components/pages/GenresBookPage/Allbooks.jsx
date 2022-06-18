import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetBooks } from "../../../features/genresBookSlice";
import CartItems from "../../CartItems";

const Allbooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.genresBook.books);


  useEffect(() => {
    dispatch(fetchGetBooks());
  }, [dispatch]);
  return (
    <div>
      {books.map((item) => {
        return <CartItems key={item._id} book={item} />;
      })}
    </div>
  );
};

export default Allbooks;
