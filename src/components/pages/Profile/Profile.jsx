import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { editAvatar, fetchOneUser } from "../../../features/auth";
import CartItems from "../../CartItems";
import styles from "./Profile.module.css";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userAuth);
  const image = useSelector((state) => state.auth.image);
  const loading = useSelector((state) => state.user.loading);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  const handleUpdateAvatar = (file) => {
    dispatch(editAvatar({ file, id }));
  };

  const avat =
    "https://c0.klipartz.com/pngpicture/684/352/gratis-png-un-golpe-hombre-saitama-anime-superheroe-un-golpe.png";

  return (
    <>
      <div className={styles.user}>
        <div>
          <img
            src={image.avatar ? `http://localhost:3001/${image.avatar}` : avat}
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
            <label htmlFor="upload">Сменить аватар</label>
            <br />
            <label onClick={handleUpdateAvatar} htmlFor="desc">
              Сохранить
            </label>
          </div>
        </div>
        <div>
          <div>
            <span>{user.name}</span>
            <span>{user.lastname}</span>
          </div>
          <div>Почта: {user.email}</div>
          <div>Телефон: {user.tel}</div>
        </div>
      </div>
      <div>
        <h2>Покупки</h2>
        <div>
          {user.buyed?.map((book) => {
            return <CartItems key={book._id} book={book} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
