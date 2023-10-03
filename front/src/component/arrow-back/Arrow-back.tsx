import React from "react";
import "./Arrow-back.css";

const Arrowback = () => {
  return (
    <div onClick={() => window.history.back()} className="arrow__container">
      <img src="/svg/arrowback.svg" alt="<" className="arrow__back" />
    </div>
  );
};

export default Arrowback;
