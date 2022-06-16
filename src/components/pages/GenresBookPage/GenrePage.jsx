import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Genre.module.css";
import { Link } from "react-router-dom";
import { fetchGenresBook, fetchGetBooks } from "../../../features/genresBookSlice";

const GenrePage = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genresBook.genresBook);
  const getBooks = useSelector((state) => state.genresBook.book)
  console.log(getBooks)

  useEffect(() => {
    dispatch(fetchGenresBook());
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
       
       </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default GenrePage;
