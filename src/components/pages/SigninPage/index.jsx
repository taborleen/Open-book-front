import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../../features/auth";

const Signin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signinUp = useSelector((state) => state.auth.signinUp);

  const dispatch = useDispatch();

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    if (login.trim() && password.trim()) {
      dispatch(doLogin({ login, password }));

      setLogin("");
      setPassword("");
    }
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <form onSubmit={(e) => handleSignin(e)}>
        <div>
          <input
            placeholder="Введите логин"
            value={login}
            type="text"
            onChange={(e) => handleChangeLogin(e)}
          />
        </div>
        <div>
          <input
            placeholder="Введите пароль"
            value={password}
            type="password"
            onChange={(e) => handleChangePassword(e)}
          />
        </div>
        <button disabled={signinUp}>Войти</button>
      </form>
    </div>
  );
};

export default Signin;
