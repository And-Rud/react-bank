import React from "react";
import "./RecoveryPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyButton from "../../component/mybutton/MyButton";
import Footer from "../../component/footer/Footer";
import MyInput from "../../component/input/MyInput";
import { useNavigate } from "react-router-dom";

const RecoveryPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="main">
        <div className="text_content">
          <h1>Recover password</h1>
          <p>Choose a recovery method</p>
        </div>
        <form className="container">
          <MyInput name="email" text="Email" type="email" />
          <MyButton
            onClick={() => navigate("/recovery-confirm")}
            className={"button__dark"}
          >
            Send code
          </MyButton>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default RecoveryPage;
