import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import { fetchOneUser } from "../../../features/auth";
import styles from "./Profile.module.css";
import PersonalData from "./PersonalData";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userAuth);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  const exitFromAccaunt = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    window.location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.userData}>
        <PersonalData user={user} id={id} />
      </div>
      <ul className={styles.nav}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to={`/profile/${id}/bookmarks`}
          >
            Закладки
          </NavLink>
        </li>
        <li onClick={exitFromAccaunt}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to="/"
          >
            Выйти
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Profile;
