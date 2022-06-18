import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Genre.module.css";
import { Link } from "react-router-dom";
import { fetchGenresBook, fetchGetBooks } from "../../../features/genresBookSlice";
import CartItems from "../../CartItems";
import { Outlet } from "react-router-dom";


const GenrePage = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genresBook.genresBook);
  const books = useSelector((state) => state.genresBook.books)
  console.log(books);

  useEffect(() => {
    dispatch(fetchGenresBook())
    
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <div className={styles.header}> </div>
      <div className={styles.content}>
        <ul className={styles.genres}>
          <h2>Жанры</h2>
          {genres.map((genre) => (
            <li key={genre._id}>
              <Link className={styles.link} to={`/genres/${genre._id}`}>{genre.name}</Link>
            </li>
          ))}
        </ul>
       <div>
       <Outlet/>

       
       </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default GenrePage;
