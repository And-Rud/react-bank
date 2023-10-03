import React from "react";
import "./MyButton.css";

const MyButton = ({
  children,
  className,
  onClick,
}: {
  children: string;
  className: string;
  onClick?: any;
}) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
