import React from "react";

const FillButton = ({butName, func}) => {
  return (
    <button type="button" className="btn btn-primary fs-5" onClick={func}>
      {butName}
    </button>
  );
};

export default FillButton;
