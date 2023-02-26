import React from "react";

const Register = () => {
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
              />
              <label className="text-light" htmlFor="floatingInput">
                Email
              </label>
              <span className="text-danger"></span>
            </div>
            <div className="form-floating mb-3">
              <input
                style={{ background: "#00183A" }}
                className="form-control  text-light"
                id="floatingInput"
                placeholder="Имя пользователя"
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
              />
              <label className="text-light" htmlFor="floatingPassword">
                Пароль
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
              />
              <label className="text-light" htmlFor="floatingPassword">
                Подтвердите пароль
              </label>
              <span className="text-danger"></span>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Регистрация
            </button>
            <span className="text-danger"></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
