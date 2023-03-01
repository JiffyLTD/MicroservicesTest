import React, { useState } from "react";
import AccountServiceAPI from "../../API/Account/AccountServiceAPI";

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
          <form
            className="p-4 p-md-5  rounded-3"
            style={{ background: "#00183A" }}
          >
            <div className="form-floating mb-3">
              <input
                style={{ background: "#00183A" }}
                type="email"
                className="form-control  text-light"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(event) => setEmail(event.target.value)}
              />
              <label className="text-light" htmlFor="floatingInput">
                Email
              </label>
              <span className="text-danger">{validateEmail().message}</span>
            </div>
            <div className="form-floating mb-3">
              <input
                style={{ background: "#00183A" }}
                className="form-control  text-light"
                id="floatingInput"
                placeholder="Имя пользователя"
                onChange={(event) => setLogin(event.target.value)}
              />
              <label className="text-light" htmlFor="floatingInput">
                Логин
              </label>
              <span className="text-danger"></span>
            </div>
            <div className="form-floating mb-3">
              <input
                style={{ background: "#00183A" }}
                type="password"
                className="form-control  text-light"
                id="floatingPassword"
                placeholder="Password"
                onChange={(event) => setPass(event.target.value)}
              />
              <label className="text-light" htmlFor="floatingPassword">
                Пароль
              </label>
              <span className="text-danger">{passValid().message}</span>
            </div>
            <div className="form-floating mb-3">
              <input
                style={{ background: "#00183A" }}
                type="password"
                className="form-control  text-light"
                id="floatingPassword"
                placeholder="Password"
                onChange={(event) => setConfPass(event.target.value)}
              />
              <label className="text-light" htmlFor="floatingPassword">
                Подтвердите пароль
              </label>
              <span className="text-danger">{confPassValid().message}</span>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              disabled={registerFormValid()}
              onClick={register}
            >
              Регистрация
            </button>
            <span className="text-danger">{error}</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
