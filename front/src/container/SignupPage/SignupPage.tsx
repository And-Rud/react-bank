import React, { useState } from "react";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import MyButton from "../../component/mybutton/MyButton";
import MyAlert from "../../component/alert/MyAlert";
import Footer from "../../component/footer/Footer";
import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
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
          <h1>Sign up</h1>
          <p>Choose a registration method</p>
        </div>
        <div className="container">
          <MyInput name="email" text="Email" type="email" />
          <MyInput
            name="password"
            text="Password"
            type={hide ? "password" : "text"}
          />
          <img
            onClick={handleSplitClick}
            className="signup__input__img"
            src={hide ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
          <div>
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
          <MyButton
            onClick={() => navigate("/signup-confirm")}
            className={"button__dark"}
          >
            Continue
          </MyButton>

          <MyAlert />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignupPage;
