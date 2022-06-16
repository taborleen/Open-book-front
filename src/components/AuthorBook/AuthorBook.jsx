//import styles from "./cart.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthorBook, fetchBooks } from "../../features/authorSlice";
import CartItems from "../CartItems";

const AuthorBook = () => {
  const dispatch = useDispatch();
  const author = useSelector((state) => state.author.author);
  const book = useSelector((state) => state.author.book);

  const [get, setGet] = useState(false);

  useEffect(() => {
    dispatch(fetchAuthorBook());
  }, [dispatch]);

  const booksAuthor = (authorId) => {
    //console.log(authorId)
    dispatch(fetchBooks(authorId));
    setGet(true);
  };

  return (
    <>
      {author.map((item) => {
        return (
          <div>
            <li onClick={() => booksAuthor(item._id)}>{item.name}</li>
          </div>
        );
      })}
      <div>
        {get &&
          book.map((item) => {
            return <CartItems key={item.id} book={item} />;
          })}
      </div>
    </>
  );
};

export default AuthorBook;
