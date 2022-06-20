import { StaticDateRangePicker } from "@mui/lab";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../../features/auth";
import styles from "./Signin.module.css";

const Signin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const error = useSelector((state) => state.auth.error);

  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [loginError, setLoginError] = useState(
    "Это поле должно быть заполнено"
  );
  const [passwordError, setPasswordError] = useState(
    "Это поле должно быть заполнено"
  );

  const signinUp = useSelector((state) => state.auth.signinUp);

  const dispatch = useDispatch();

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);

    if (!e.target.value) {
      setLoginError("Это поле должно быть заполнено");
    } else {
      setLoginError("");
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 5) {
      setPasswordError("пароль не должен быть меньше 5 символов");
      if (!e.target.value) {
        setPasswordError("Это поле должно быть заполнено");
      }
    } else {
      setPasswordError("");
    }
  };

  const handleSignin = (e) => {
    e.preventDefault();
    if (login.trim() && password.trim()) {
      dispatch(doLogin({ login, password }));

      setLogin("");
      setPassword("");
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "password":
        setPasswordDirty(true);
        break;
      case "login":
        setLoginDirty(true);
        break;
      default:
        return false;
    }
  };

  const disabled = login && password;

  return (
    <div className={styles.signin}>
      <h1>Авторизация</h1>
      {error && (
        <div className={styles.error}>
          Введены неверные данные. Попробуйте еще раз.
        </div>
      )}
      <form className={styles.form} onSubmit={(e) => handleSignin(e)}>
        <div className={styles.login}>
          <input
            name="login"
            value={login}
            type="login"
            placeholder="Логин"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChangeLogin(e)}
          />
          {loginDirty && loginError && (
            <div className={styles.error}>{loginError}</div>
          )}
        </div>
        <div className={styles.password}>
          <input
            name="password"
            value={password}
            type={visible ? "text" : "password"}
            placeholder="Пароль"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChangePassword(e)}
          />
          {passwordDirty && passwordError && (
            <div className={styles.error}>{passwordError}</div>
          )}
          <span onClick={() => setVisible(!visible)}>👁</span>
        </div>
        <button disabled={!disabled && signinUp}>Войти</button>
      </form>
    </div>
  );
};

export default Signin;
