import React from "react";
import { useContext } from "react";
import BorderButLink from "../UI/BorderButLink/BorderButLink";
import FillButton from "../UI/FillButton/FillButton";
import HeadLinks from "../UI/ForHeader/HeadLinks/HeadLinks";
import Logo from "../UI/ForHeader/Logo/Logo";
import { AuthContext } from "./../../Context/index";
import FillButLink from "./../UI/FillButLink/FillButLink";

const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function SignOut() {
    setIsAuth(false);
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("UserRole");
    localStorage.removeItem("UserId");
  }

  return (
    <header className="p-3 mb-3" style={{ background: "#010A19" }}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Logo />

          <HeadLinks />
          {isAuth ? 
          (
            <div className="px-5 col-md-3 text-end">
              <BorderButLink link="/profile" butName="Профиль" />
              <FillButton butName="Выйти" func={SignOut} />
            </div>
          ) : 
          (
            <div className="px-5 col-md-3 text-end">
              <BorderButLink link="/login" butName="Вход" />
              <FillButLink link="/register" butName="Регистрация" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
