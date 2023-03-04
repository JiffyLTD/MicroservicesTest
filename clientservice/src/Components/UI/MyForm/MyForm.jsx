import React from "react";

const MyForm = ({children}) => {
  return (
    <form className="p-4 p-md-5  rounded-3" style={{ background: "#00183A" }}>
        {children}
    </form>
  );
};

export default MyForm;
