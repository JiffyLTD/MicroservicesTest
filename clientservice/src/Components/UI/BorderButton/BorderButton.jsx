import React from "react";

const BorderButton = ({ butName }) => {
  return (
    <button className="btn btn-outline-primary me-2 fs-5" type="button">
      {butName}
    </button>
  );
};

export default BorderButton;
