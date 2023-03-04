import React, { useState } from "react";
import AccountServiceAPI from "../../API/Account/AccountServiceAPI";
import FillButton from "../../Components/UI/FillButton/FillButton";
import MyInput from "../../Components/UI/MyInput/MyInput";
import MyForm from "./../../Components/UI/MyForm/MyForm";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const SignIn = async (e) => {
    e.preventDefault();
    try {
      let signInResult = await AccountServiceAPI.SignIn(login, password);

      if (signInResult.data.statusCode === 200) {
        window.location.assign("/main");
        localStorage.setItem(
          "AccessToken",
          signInResult.data.value.accessToken
        );
        localStorage.setItem("UserRole", signInResult.data.value.role);
        localStorage.setItem("UserId", signInResult.data.value.id);
      } else {
        setError(signInResult.data.value); //errors
      }
    } catch (errors) {
      setError(errors.message);
    }
  };

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
          <MyForm>
            <MyInput
              inputName="Логин"
              placeHold="Login"
              inputControl={(event) => setLogin(event.target.value)}
              inputType="text"
            />
            <MyInput
              inputName="Пароль"
              placeHold="Password"
              inputControl={(event) => setPassword(event.target.value)}
              inputType="password"
            />
            <span className="text-danger">{error}</span>
            <div className="text-end">
              <FillButton butName="Вход" func={SignIn} />
            </div>
            <small className="text-muted">
              Нажимая Вход, вы соглашаетесь с условиями использования.
            </small>
          </MyForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
