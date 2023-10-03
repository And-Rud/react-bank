import React from "react";
import "./SigninPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import Footer from "../../component/footer/Footer";
import MyButton from "../../component/mybutton/MyButton";
import { Link } from "react-router-dom";

const SigninPage = () => {
  return (
    <div className="main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="text_content">
        <h1>Sign in</h1>
        <p>Select login method</p>
      </div>
      <form className="container">
        <MyInput name="email" text="Email" type="email" />
        <MyInput name="password" text="Password" type="password" />
        <div>Sorry, the password is too simple</div>
        <div>
          Forgot your password? <Link to="/recovery">Restore</Link>
        </div>

        <MyButton className={"button__dark"}>Continue</MyButton>
      </form>
      <Footer />
    </div>
  );
};

export default SigninPage;
