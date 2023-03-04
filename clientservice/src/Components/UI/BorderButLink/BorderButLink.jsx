import React from "react";
import BorderButton from "../BorderButton/BorderButton";

const BorderButLink = ({link, butName, func}) => {
  return (
    <a href={link}>
        <BorderButton butName={butName} func={func}/>
    </a>
  );
};

export default BorderButLink;
