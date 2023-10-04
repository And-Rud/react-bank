import React, { useState } from "react";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import MyButton from "../../component/mybutton/MyButton";
import Footer from "../../component/footer/Footer";
import { useNavigate } from "react-router-dom";
import "./RecoveryConfirmPage.css";

const RecoveryConfirmPage = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const handleSplitClick = () => {
    if (hide) setHide(false);
    if (!hide) setHide(true);
  };
  return (
    <div>
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="main">
        <div className="text_content">
          <h1>Recovery password</h1>
          <p>Write the code you received</p>
        </div>
        <form className="container">
          <MyInput name="code" text="Code" type="text" />
          <MyInput
            name="password"
            text="Password"
            type={hide ? "password" : "text"}
          />
          <img
            onClick={handleSplitClick}
            className="reccov__input__img"
            src={hide ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
          <MyButton
            onClick={() => navigate("/balance")}
            className={"button__dark"}
          >
            Restore password
          </MyButton>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default RecoveryConfirmPage;
