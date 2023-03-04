import React from "react";

const HeadLinks = () => {
  return (
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fs-4">
      <li>
        <a href="/main" className="nav-link px-2 link-light">
          Главная
        </a>
      </li>
      <li>
        <a href="/dealers" className="nav-link px-2 link-light">
          Дилеры
        </a>
      </li>
      <li>
        <a href="/allCars" className="nav-link px-2 link-light">
          Все авто
        </a>
      </li>
      <li>
        <a href="/about" className="nav-link px-2 link-light">
          О нас
        </a>
      </li>
    </ul>
  );
};

export default HeadLinks;
