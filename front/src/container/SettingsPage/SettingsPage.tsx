import React, { useState, useContext } from "react";
import "./SettingsPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import MyButton from "../../component/mybutton/MyButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext, AuthContextType } from "../../App";

const SettingsPage = () => {
  const { state, dispatch } = useContext(AuthContext) as AuthContextType;

  const [formData1, setFormData1] = useState({
    email: "",
    passwordOld1: "",
    id: null,
  });
  const [formData2, setFormData2] = useState({
    passwordOld2: "",
    passwordNew: "",
    id: null,
  });
  const navigate = useNavigate();
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  const [hide3, setHide3] = useState(true);
  const handleSplitClick1 = () => {
    if (hide1) setHide1(false);
    if (!hide1) setHide1(true);
  };
  const handleSplitClick2 = () => {
    if (hide2) setHide2(false);
    if (!hide2) setHide2(true);
  };
  const handleSplitClick3 = () => {
    if (hide3) setHide3(false);
    if (!hide3) setHide3(true);
  };
  const handleClickMail = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/settings/mail",
        formData1
      );
      const data = response.data;

      setFormData1({
        email: "",
        passwordOld1: "",
        id: state.user.id,
      });

      console.log("Відповідь від сервера:", data);
    } catch (error) {
      console.log("Помилка відправки запиту:", error);
    }
  };
  const handleClickPassword = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/settings/password",
        formData2
      );
      const data = response.data;

      setFormData2({
        passwordOld2: "",
        passwordNew: "",
        id: state.user.id,
      });

      console.log("Відповідь від сервера:", data);
    } catch (error) {
      console.log("Помилка відправки запиту:", error);
    }
  };
  const handleChangeMail = (event: any) => {
    const { name, value } = event.target;
    setFormData1({ ...formData1, [name]: value, id: state.user.id });
  };
  const handleChangePassword = (event: any) => {
    const { name, value } = event.target;
    setFormData2({ ...formData2, [name]: value, id: state.user.id });
  };
  const logout = () => {
    if (dispatch) {
      dispatch({ type: "LOGOUT" });

      navigate("/");
    }
  };
  return (
    <div className="set__main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="set__container">
        <div className="set__title">Settings</div>
        <form onSubmit={handleClickMail} className="set__form">
          <div className="set__form__title">Change Email</div>
          <MyInput
            onChange={handleChangeMail}
            value={formData1.email}
            name="email"
            text="Email"
            type="email"
          />
          <MyInput
            onChange={handleChangeMail}
            value={formData1.passwordOld1}
            name="passwordOld1"
            text="Old Password"
            type={hide1 ? "password" : "text"}
          />
          <img
            onClick={handleSplitClick1}
            className="sett__input__img__1"
            src={hide1 ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
          <MyButton type="submit" className={"button__light"}>
            Save Email
          </MyButton>
        </form>
        <form onSubmit={handleClickPassword} className="set__form">
          <div className="set__form__title">Change Password</div>
          <MyInput
            onChange={handleChangePassword}
            value={formData2.passwordOld2}
            name="passwordOld2"
            text="Old Password"
            type={hide2 ? "password" : "text"}
          />
          <img
            onClick={handleSplitClick2}
            className="sett__input__img__2"
            src={hide2 ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
          <MyInput
            onChange={handleChangePassword}
            value={formData2.passwordNew}
            name="passwordNew"
            text="New Password"
            type={hide3 ? "password" : "text"}
          />
          <img
            onClick={handleSplitClick3}
            className="sett__input__img__3"
            src={hide3 ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
          <MyButton type="submit" className={"button__light"}>
            Save Password
          </MyButton>
        </form>
        <MyButton onClick={logout} className={"button__light"}>
          Logout
        </MyButton>
      </div>
    </div>
  );
};

export default SettingsPage;
