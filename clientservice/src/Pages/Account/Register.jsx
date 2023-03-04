import React, { useState } from "react";
import AccountServiceAPI from "../../API/Account/AccountServiceAPI";
import MyForm from "../../Components/UI/MyForm/MyForm";
import MyInput from "../../Components/UI/MyInput/MyInput";
import FillButton from "./../../Components/UI/FillButton/FillButton";

const Register = () => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [error, setError] = useState("");

  const register = async (e) => {
    e.preventDefault();

    let user = { email: email, login: login, password: pass };

    try {
      let result = await AccountServiceAPI.Register(user);

      switch (result.data.statusCode) {
        case 200:
          let signInResult = await AccountServiceAPI.SignIn(login, pass);

          if (signInResult.data.statusCode === 200) {
            localStorage.setItem(
              "AccessToken",
              signInResult.data.value.accessToken
            );
            localStorage.setItem("UserRole", signInResult.data.value.role);
            localStorage.setItem("UserId", signInResult.data.value.id);
          } else {
            console.log(signInResult); //errors
          }
          break;
        case 400:
          setError(result.data.value);
          break;
        default:
          setError("Опачки ошибочка");
          break;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const registerFormValid = () => {
    if (
      validateEmail().status &&
      loginValid() &&
      passValid().status &&
      confPassValid().status
    ) {
      return false;
    } else {
      return true;
    }
  };

  const validateEmail = () => {
    let response = {};

    const expression =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (expression.test(String(email).toLowerCase())) {
      return (response = { status: true, message: "" });
    } else if (email.length > 0) {
      return (response = {
        status: false,
        message: "Пример example@gmail.bob",
      });
    } else {
      return (response = { status: false, message: "" });
    }
  };

  const passValid = () => {
    let response = {};

    if (pass.length >= 5) {
      return (response = { status: true, message: "" });
    } else if (pass.length < 5 && pass.length > 0) {
      return (response = {
        status: false,
        message: "Длина пароля должна быть более 5 символов",
      });
    } else {
      return (response = { status: false, message: "" });
    }
  };

  const confPassValid = () => {
    let response = {};
    if (pass.length >= 5 && pass === confPass) {
      return (response = { status: true, message: "" });
    } else if (pass !== confPass && confPass.length > 0) {
      return (response = { status: false, message: "Пароли должны совпадать" });
    } else {
      return (response = { status: false, message: "" });
    }
  };

  const loginValid = () => {
    return login.length > 0;
  };

  return (
    <div className="container px-4 py-5" id="icon-grid">
      <div className="row align-items-center">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3 link-light">
            Регистрация
          </h1>
          <p className="col-lg-10 fs-4 link-light">
            При первичной регистрации вы заполняете минимум информации. Для
            заключения сделки вам придется дополнить все данные в своем профиле.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <MyForm>
            <MyInput
              inputType="email"
              placeHold="name@example.com"
              inputName="Email"
              inputControl={(event) => setEmail(event.target.value)}
              error={validateEmail().message}
            />
            <MyInput
              inputType="text"
              placeHold="Username"
              inputName="Имя пользователя"
              inputControl={(event) => setLogin(event.target.value)}
            />
            <MyInput
              inputType="password"
              placeHold="Password"
              inputName="Пароль"
              inputControl={(event) => setPass(event.target.value)}
              error={passValid().message}
            />
            <MyInput
              inputType="password"
              placeHold="Password"
              inputName="Подтвердите пароль"
              inputControl={(event) => setConfPass(event.target.value)}
              error={confPassValid().message}
            />
            <div className="text-end">
              <FillButton
                butName="Регистрация"
                func={register}
                dis={registerFormValid()}
              />
            </div>
            <span className="text-danger">{error}</span>
          </MyForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
