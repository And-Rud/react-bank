import React, { useState } from "react";
import "./SettingsPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import MyButton from "../../component/mybutton/MyButton";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const handleSplitClick = () => {
    if (hide) setHide(false);
    if (!hide) setHide(true);
  };
  return (
    <div className="set__main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="set__container">
        <div className="set__title">Settings</div>
        <form className="set__form">
          <div className="set__form__title">Change Email</div>
          <MyInput name="email" text="Email" type="email" />
          <MyInput
            name="password"
            text="Old Password"
            type={hide ? "password" : "text"}
          />
          <img
            onClick={handleSplitClick}
            className="sett__input__img__1"
            src={hide ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
          <MyButton className={"button__light"}>Save Email </MyButton>
        </form>
        <form className="set__form">
          <div className="set__form__title">Change Password</div>
          <MyInput
            name="password"
            text="Old Password"
            type={hide ? "password" : "text"}
          />
          <img
            onClick={handleSplitClick}
            className="sett__input__img__2"
            src={hide ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
          <MyInput
            name="password"
            text="New Password"
            type={hide ? "password" : "text"}
          />
          <img
            onClick={handleSplitClick}
            className="sett__input__img__3"
            src={hide ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
          <MyButton className={"button__light"}>Save Password </MyButton>
        </form>
        <MyButton onClick={() => navigate("/")} className={"button__light"}>
          Logout
        </MyButton>
      </div>
    </div>
  );
};

export default SettingsPage;
