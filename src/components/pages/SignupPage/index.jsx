import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../../features/auth";
import styles from "./Signup.module.css";

const Signup = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const [nameDirty, setNameDirty] = useState(false);
  const [LastnameDirty, setLastnameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [nameError, setNameError] = useState("Это поле должно быть заполнено");
  const [LastnameError, setLastnameError] = useState(
    "Это поле должно быть заполнено"
  );
  const [emailError, setEmailError] = useState(
    "Это поле должно быть заполнено"
  );
  const [loginError, setLoginError] = useState(
    "Это поле должно быть заполнено"
  );
  const [passwordError, setPasswordError] = useState(
    "Это поле должно быть заполнено"
  );

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("Это поле должно быть заполнено");
    } else {
      setNameError("");
    }
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
    if (!e.target.value) {
      setLastnameError("Это поле должно быть заполнено");
    } else {
      setLastnameError("");
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
      if (!e.target.value) {
        setEmailError("Это поле должно быть заполнено");
      }
    } else {
      setEmailError("");
    }
  };

  const handleChangeTel = (e) => {
    setTel(e.target.value);
  };

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

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "login":
        setLoginDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      case "Lastname":
        setLastnameDirty(true);
        break;
      default:
        return false;
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    if (disabled.trim) {
      dispatch(registerUser({ name, lastname, email, tel, login, password }));
      setName("");
      setLastname("");
      setEmail("");
      setTel("");
      setLogin("");
      setPassword("");
    }
  };

  const disabled = name && lastname && email && login && password;

  return (
    <div className={styles.signup}>
      <form className={styles.form} onSubmit={(e) => addUser(e)}>
        {error && <div>Такой пользователь уже существует</div>}
        <div>
          {nameDirty && nameError && <div>{nameError}</div>}
          <input
            name="name"
            value={name}
            type="text"
            placeholder="Введите ваше имя"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChangeName(e)}
          />
        </div>
        <div>
          {LastnameDirty && LastnameError && <div>{LastnameError}</div>}
          <input
            name="Lastname"
            type="text"
            value={lastname}
            placeholder="Введите вашу фамилию"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChangeLastname(e)}
          />
        </div>
        <div>
          {emailDirty && emailError && <div>{emailError}</div>}
          <input
            name="email"
            value={email}
            type="email"
            placeholder="name@example.com"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChangeEmail(e)}
          />
        </div>
        <div>
          <InputMask
            mask="+7 (999) 999 9999"
            value={tel}
            type="tel"
            placeholder="Телефон"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChangeTel(e)}
          ></InputMask>
        </div>
        <div>
          {loginDirty && loginError && <div>{loginError}</div>}
          <input
            name="login"
            value={login}
            type="login"
            placeholder="Логин"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChangeLogin(e)}
          />
        </div>
        <div className={styles.password}>
          {passwordDirty && passwordError && <div>{passwordError}</div>}
          <input
            name="password"
            value={password}
            type={visible ? "text" : "password"}
            placeholder="Пароль"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChangePassword(e)}
          />
          <span onClick={() => setVisible(!visible)}>👁</span>
        </div>
        <button disabled={!disabled}>Регистрация</button>
      </form>
      <div>
        <span>
          Уже есть аккаунт? <Link to="/signin">Войти</Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
