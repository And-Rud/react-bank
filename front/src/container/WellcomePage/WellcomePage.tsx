import React from "react";
import Header from "../../component/header/Header";
import MyButton from "../../component/mybutton/MyButton";
import Footer from "../../component/footer/Footer";
import { useNavigate } from "react-router-dom";
import "./WellcomePage.css";

const WellcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="wellcome">
      <div className="wcontainer">
        <div className="wcontent">
          <Header className={"header__light"} />
        </div>
        <div className="text">
          <div className="text__title">Hello!</div>
          <div className="text__content">Welcome to bank app</div>
        </div>
      </div>
      <div className="bcontainer">
        <MyButton
          onClick={() => navigate("/signup")}
          className={"button__dark"}
        >
          Sign Up
        </MyButton>

        <MyButton
          onClick={() => navigate("/signin")}
          className={"button__light"}
        >
          Sign In
        </MyButton>
      </div>
      <Footer />
    </div>
  );
};

export default WellcomePage;
