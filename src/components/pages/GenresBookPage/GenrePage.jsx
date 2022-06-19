import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Genre.module.css";
import { NavLink } from "react-router-dom";
import { fetchGenres } from "../../../features/genresBookSlice";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../BreadСrumbs";

const GenrePage = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genresBook.genresBook);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <BreadCrumbs link="/genres" linkName={"Жанры"} />
      </div>
      <div className={styles.content}>
        <ul className={styles.genres}>
          <h2>Жанры</h2>
          {genres.map((genre) => (
            <li key={genre._id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to={`/genres/${genre._id}`}
              >
                {genre.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.carts}>
          <Outlet />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GenrePage;
