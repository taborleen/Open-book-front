import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBooks,
} from "../../../features/similarBooksReducer";
import CartItems from "../../CartItems";


const SimilarBooks = ({ book }) => {
  const dispatch = useDispatch();

  const getAll = useSelector(
    (state) => state.similarBook.books
  );

 

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);
  const filtered = getAll.filter((item) => item.genres._id === book.genres._id && item._id !== book._id);

  return (
    <div>
      {filtered.map((item) => {
        return <CartItems key={item._id} book={item} />;
      })}
    </div>
  );
};


export default SimilarBooks;
