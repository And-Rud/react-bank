import React from "react";
import "./SettingsPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import MyButton from "../../component/mybutton/MyButton";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="set__main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="set__container">
        <div className="set__title">Settings</div>
        <form className="set__form">
          <div className="set__form__title">Change Email</div>
          <MyInput name="email" text="Email" type="email" />
          <MyInput name="password" text="Old Password" type="password" />
          <MyButton className={"button__light"}>Save Email </MyButton>
        </form>
        <form className="set__form">
          <div className="set__form__title">Change Password</div>
          <MyInput name="password" text="Old Password" type="password" />
          <MyInput name="password" text="New password" type="password" />
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
