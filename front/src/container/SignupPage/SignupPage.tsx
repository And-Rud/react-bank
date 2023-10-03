import React from "react";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import MyButton from "../../component/mybutton/MyButton";
import MyAlert from "../../component/alert/MyAlert";
import Footer from "../../component/footer/Footer";
import "./SignupPage.css";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="text_content">
        <h1>Sign up</h1>
        <p>Choose a registration method</p>
      </div>
      <div className="container">
        <MyInput name="email" text="Email" type="email" />
        <MyInput name="password" text="Password" type="password" />

        <div>
          Already have an account? <Link to="/signin">Sign In</Link>
        </div>
        <Link to="/signup-confirm" className="singup__button__link">
          <MyButton className={"button__dark"}>Continue</MyButton>
        </Link>
        <MyAlert />
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;
