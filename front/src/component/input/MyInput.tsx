import React from "react";
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
  return (
    <div className="myinput">
      <label htmlFor={name}>{text}</label>
      <input className="input" name={name} type={type} />
    </div>
  );
};

export default MyInput;
