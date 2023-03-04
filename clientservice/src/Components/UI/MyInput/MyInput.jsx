import React from "react";

const MyInput = ({inputName, inputControl,placeHold, inputType, error}) => {
  return (
    <div className="form-floating mb-3">
      <input
        className="form-control text-light"
        style={{ background: "#00183A" }}
        id="floatingInput"
        onChange={inputControl}
        placeholder={placeHold}
        type={inputType}
      />
      <label className="text-light" htmlFor="floatingInput">
        {inputName}
      </label>
      <span className="text-danger">{error}</span>
    </div>
  );
};

export default MyInput;
