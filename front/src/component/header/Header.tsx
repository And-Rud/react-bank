import React from "react";
import "./Header.css";

const Header = ({ className }: { className: string }) => {
  return (
    <div className={`header ${className}`}>
      <div className={`${className}`}>9:41</div>
      <div>
        <img src="/svg/cellular.svg" alt="Cellular/Wifi" />
      </div>
    </div>
  );
};

export default Header;
