import React from "react";
import { useEffect } from "react";
import AccountServiceAPI from "./../API/Account/AccountServiceAPI";
import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState();

  useEffect(  () => {
    async function GetUserData() {
      let userData = await AccountServiceAPI.Profile();
      setUser(userData);
      console.log(user)
    };
    GetUserData();
  },[]);

  return (
    <div
      className="container px-4 py-2"
      id="icon-grid "
      style={{ background: "#00183A" }}
    >
      <h2 className="pb-2 border-bottom link-light">Личный кабинет</h2>
      <div className="row align-items-center" style={{ background: "#00183A" }}>
        <h4 className=" border-bottom link-light text-center mt-4 py-2">
          Личные данные
        </h4>
        <div className="col-lg-3 text-center text-lg-start">
          <form className="p-1 p-md-1  rounded-3">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control text-light"
                id="floatingInput"
                style={{ background: "#00183A" }}
                readOnly
              />
              <label className="text-light" htmlFor="floatingInput">
                Фамилия
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={''}
                type="text"
                className="form-control text-light"
                id="floatingInput"
                style={{ background: "#00183A" }}
                readOnly
              />
              <label className="text-light" htmlFor="floatingInput">
                Имя
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={''}
                type="text"
                className="form-control text-light"
                id="floatingInput"
                style={{ background: "#00183A" }}
                readOnly
              />
              <label className="text-light" htmlFor="floatingInput">
                Отчество
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={''}
                type="text"
                className="form-control text-light"
                id="floatingInput"
                style={{ background: "#00183A" }}
                readOnly
              />
              <label className="text-light" htmlFor="floatingInput">
                Логин
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={''}
                type="text"
                className="form-control text-light"
                id="floatingInput"
                style={{ background: "#00183A" }}
                readOnly
              />
              <label className="text-light" htmlFor="floatingInput">
                Email
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={''}
                type="text"
                className="form-control text-light"
                id="floatingInput"
                style={{ background: "#00183A" }}
                readOnly
              />
              <label className="text-light" htmlFor="floatingInput">
                Телефон
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                value= ''
                type="text"
                className="form-control text-light"
                id="floatingInput"
                style={{ background: "#00183A" }}
                readOnly
              />
              <label className="text-light" htmlFor="floatingInput">
                Роль
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control text-light"
                id="floatingInput"
                style={{ background: "#00183A" }}
                readOnly
              />
              <label className="text-light" htmlFor="floatingInput">
                Дата регистрации
              </label>
            </div>
          </form>
        </div>
        <div
          className="col-lg-9 text-center text-lg-start"
          style={{ background: "#00183A" }}
        >
          <h4 className="link-light text-center ">Фото профиля</h4>
          <form className="p-4 p-md-1  rounded-3 text-center">
            <div className="">
              <img
                src="~/Images/@Model.ProfilePhotoPath"
                alt="mdo"
                width="400"
                height="400"
                className="rounded-circle"
              />
              <div className="px-5 mt-2 ">
                <a href="/Profile/UserEdit">
                  <button
                    className="w-50 btn btn-primary btn-lg "
                    type="button"
                  >
                    Редактировать профиль
                  </button>
                </a>
                <hr className="my-2" />
                <a href="/UsersList/UsersList">
                  <button
                    className="w-50 btn btn-warning btn-lg mt-2"
                    type="button"
                  >
                    Просмотреть профили пользователей
                  </button>
                </a>
              </div>
            </div>
          </form>
        </div>

        <div className="py-2 mb-4" style={{ background: "#00183A" }}>
          <h4 className=" border-bottom link-light text-center mt-4 py-2">
            Паспортные данные
          </h4>
          <form className="needs-validation " noValidate="">
            <div className="row g-3 px-5">
              <div className="form-floating col-md-2">
                <input
                  type="text"
                  className="form-control text-light"
                  id="floatingInput"
                  style={{ background: "#00183A" }}
                  readOnly
                />
                <label className="text-light" htmlFor="floatingInput">
                  Серия номер
                </label>
              </div>
              <div className="form-floating col-md-2">
                <input
                  type="text"
                  className="form-control text-light"
                  id="floatingInput"
                  style={{ background: "#00183A" }}
                  readOnly
                />
                <label className="text-light" htmlFor="floatingInput">
                  Дата выдачи
                </label>
              </div>
              <div className="form-floating col-md-6">
                <input
                  type="text"
                  className="form-control text-light"
                  id="floatingInput"
                  style={{ background: "#00183A" }}
                  readOnly
                />
                <label className="text-light" htmlFor="floatingInput">
                  Кем выдано
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
