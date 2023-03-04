import React from "react";

const FillButton = ({butName, func, dis}) => {
  return (
    <button type="button" className="btn btn-primary fs-5" onClick={func} disabled={dis}>
      {butName}
    </button>
  );
};

export default FillButton;
