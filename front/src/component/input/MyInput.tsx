import React, { useState } from "react";
import "./MyInput.css";

const MyInput = ({
  name,
  text,
  type,
  className,
}: {
  name: string;
  text: string;
  type: string;
  className?: string;
}) => {
  const [hide, setHide] = useState(true);
  const handleSplitClick = () => {
    if (hide) setHide(false);
    if (!hide) setHide(true);
  };
  return (
    <div className="myinput">
      <label htmlFor={name}>{text}</label>
      {type === "password" ? (
        <>
          <input
            className="input"
            name={name}
            type={hide ? "password" : "text"}
          />
          <img
            onClick={handleSplitClick}
            className="input__img"
            src={hide ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
        </>
      ) : (
        <input className="input" name={name} type={type} />
      )}
    </div>
  );
};

export default MyInput;
