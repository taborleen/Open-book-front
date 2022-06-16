import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBooks,
  getSimilarBooks,
} from "../../../features/similarBooksReducer";
import CartItems from "../../CartItems";


const SimilarBooks = ({ genres }) => {
  const dispatch = useDispatch();

//   const similarBook = useSelector(
//     (state) => state.reducerForSimilarBooks.similarBooks
//   );

  const getAll = useSelector(
    (state) => state.similarBook.books
  );

  console.log(getAll);

  useEffect(() => {
    dispatch(getSimilarBooks(genres));
    console.log(genres);
  }, [dispatch, genres]);

  useEffect(() => {
    dispatch(getAllBooks());
    console.log(getAll);
  }, [dispatch]);

  const filtered = getAll.filter((item) => item.genres._id === genres);
  console.log(filtered);

  return (
    <div>
      {filtered.map((item) => {
        return <CartItems key={item._id} item={item} />;
      })}
    </div>
  );
};

export default SimilarBooks;
