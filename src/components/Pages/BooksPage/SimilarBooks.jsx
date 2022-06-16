import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBooks,
  getSimilarBooks,
} from "../../../features/similarBooksReducer";
import CartItems from "../../CartItems";


const SimilarBooks = ({ genres }) => {
  const dispatch = useDispatch();

  const getAll = useSelector(
    (state) => state.similarBook.books
  );

  useEffect(() => {
    dispatch(getSimilarBooks(genres));
  }, [dispatch, genres]);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const filtered = getAll.filter((item) => item.genres._id === genres);

  return (
    <div>
      {filtered.map((item) => {
        return <CartItems key={item._id} book={item} />;
      })}
    </div>
  );
};

export default SimilarBooks;
