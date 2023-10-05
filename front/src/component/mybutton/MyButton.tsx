import React from "react";
import "./MyButton.css";

const MyButton = ({
  children,
  className,
  onClick,
  type,
}: {
  children: any;
  className: string;
  onClick?: any;
  type?: any;
}) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
