import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthMessage.module.css";

const AuthMessage = () => {
  return (
    <div className={styles.modal}>
      <div>
        <Link to="/signin">Войдите в ваш аккаунт.</Link>
        <div>
          <span>Нету аккаунта?</span>
          <span>
            <Link to="/signup">Зарегистрироваться</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthMessage;
