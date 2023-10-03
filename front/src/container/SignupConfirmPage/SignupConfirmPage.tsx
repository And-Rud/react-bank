import React from "react";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import { Link } from "react-router-dom";
import MyButton from "../../component/mybutton/MyButton";
import Footer from "../../component/footer/Footer";

const SignupConfirmPage = () => {
  return (
    <div>
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="text_content">
        <h1>Sign up</h1>
        <p>Choose a registration method</p>
      </div>
      <div className="container">
        <MyInput name="code" text="Code" type="text" />

        <Link to="/balance" className="singup__button__link">
          <MyButton className={"button__dark"}>Continue</MyButton>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default SignupConfirmPage;
