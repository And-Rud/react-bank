import React from "react";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import MyButton from "../../component/mybutton/MyButton";
import Footer from "../../component/footer/Footer";
import { useNavigate } from "react-router-dom";

const RecoveryConfirmPage = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="text_content">
        <h1>Recovery password</h1>
        <p>Write the code you received</p>
      </div>
      <form className="container">
        <MyInput name="code" text="Code" type="text" />
        <MyInput name="password" text="New password" type="password" />

        <MyButton
          onClick={() => navigate("/balance")}
          className={"button__dark"}
        >
          Restore password
        </MyButton>
      </form>
      <Footer />
    </div>
  );
};

export default RecoveryConfirmPage;
