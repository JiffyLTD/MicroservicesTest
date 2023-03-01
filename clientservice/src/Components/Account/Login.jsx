import React, { useState } from "react";
import AccountServiceAPI from './../../API/Account/AccountServiceAPI';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const SignIn = async (e) =>{
    e.preventDefault();
    let signInResult = await AccountServiceAPI.SignIn(login, password);

    if (signInResult.data.statusCode === 200) {
      window.location.assign('/main');
      localStorage.setItem(
        "AccessToken",
        signInResult.data.value.accessToken
      );
      localStorage.setItem("UserRole", signInResult.data.value.role);
      localStorage.setItem("UserId", signInResult.data.value.id);
    } else {
      setError(signInResult.data.value); //errors
    }
  }

  return (
    <div className="container px-4 py-5" id="icon-grid">
      <div className="row align-items-center">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3 link-light">
            Вход в личный кабинет
          </h1>
          <p className="col-lg-10 fs-4 link-light">
            В личном кабинете хранится вся ваша информация, не забывайте ее
            обновлять. Для улучшения защиты персональных данных меняйте пароль
            раз в месяц.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form
            className="p-4 p-md-5  rounded-3"
            style={{ background: "#00183A" }}
          >
            <div className="form-floating mb-3">
              <input
                className="form-control text-light"
                style={{ background: "#00183A" }}
                id="floatingInput"
                placeholder="Admin"
                onChange={(event) => setLogin(event.target.value)}
              />
              <label className="text-light" htmlFor="floatingInput">
                Логин
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control text-light"
                style={{ background: "#00183A" }}
                id="floatingPassword"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <label className="text-light" htmlFor="floatingPassword">
                Пароль
              </label>
            </div>
            <div className="checkbox mb-3">
              <label className="text-light">
                <input type="checkbox" /> Запомнить меня
              </label>
            </div>
            <span className="text-danger">{error}</span>
            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={SignIn}>
              Вход
            </button>

            <small className="text-muted">
              Нажимая Вход, вы соглашаетесь с условиями использования.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
