import React, { useState } from "react";
import "./SigninPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import Footer from "../../component/footer/Footer";
import MyButton from "../../component/mybutton/MyButton";
import { Link, useNavigate } from "react-router-dom";

const SigninPage = () => {
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
          <h1>Sign in</h1>
          <p>Select login method</p>
        </div>
        <form className="container">
          <MyInput name="email" text="Email" type="email" />
          <MyInput
            name="password"
            text="Password"
            type={hide ? "password" : "text"}
          />
          <img
            onClick={handleSplitClick}
            className="signin__input__img"
            src={hide ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
          <div>Sorry, the password is too simple</div>
          <div>
            Forgot your password? <Link to="/recovery">Restore</Link>
          </div>
          <MyButton
            onClick={() => navigate("/balance")}
            className={"button__dark"}
          >
            Continue
          </MyButton>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SigninPage;
