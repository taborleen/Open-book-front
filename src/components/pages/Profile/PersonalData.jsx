import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editAvatar } from "../../../features/auth";
import {FaRegEdit} from "react-icons/fa";
import styles from "./Profile.module.css";

const PersonalData = ({ user, id }) => {
  const image = useSelector((state) => state.auth.userAuth);
  const dispatch = useDispatch();

  const handleUpdateAvatar = (file) => {
    dispatch(editAvatar({ file, id }));
    localStorage.setItem("avatar", user.avatar);
  };

  return (
    <>
      <div className={styles.user}>
        <div className={styles.image}>
          <img
            src={
              image.avatar
                ? `http://localhost:3001/${image.avatar}`
                : user.avatar
            }
            alt=""
          />
          <div className={styles.editor}>
            <input
              type="file"
              id="upload"
              hidden
              accept="image/*"
              onChange={(e) => {
                handleUpdateAvatar(e.target.files[0]);
              }}
            />
            <label htmlFor="upload">
              <FaRegEdit size='3rem' />
            </label>
          </div>
        </div>
        <div className={styles.data}>
          <h1>Личные данные</h1>
          <div className={styles.person}>
          <div className={styles.name}>
            <span>{user.name}</span>
            <span>{user.lastname}</span>
          </div>
          <div className={styles.email}>
            <b>Почта:</b> {user.email}
          </div>
          <div className={styles.tel}>
            <b>Телефон:</b> {user.tel}
          </div>
        </div>
          </div>
      </div>
    </>
  );
};

export default PersonalData;
