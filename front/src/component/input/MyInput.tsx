import React from "react";
import "./MyInput.css";

const MyInput = ({
  name,
  text,
  type,
  className,
  value,
  onChange,
}: {
  name: string;
  text: string;
  type: string;
  className?: string;
  value?: string;
  onChange?: any;
}) => {
  return (
    <div className="myinput">
      <label htmlFor={name}>{text}</label>
      <input
        required
        onChange={onChange}
        value={value}
        className="input"
        name={name}
        type={type}
      />
    </div>
  );
};

export default MyInput;
