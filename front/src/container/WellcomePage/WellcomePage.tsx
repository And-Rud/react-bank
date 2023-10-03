import React from "react";
import Header from "../../component/header/Header";
import MyButton from "../../component/mybutton/MyButton";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";
import "./WellcomePage.css";

const WellcomePage = () => {
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
        <Link to="/signup">
          <MyButton className={"button__dark"}>Sign Up</MyButton>
        </Link>
        <Link to="/signin">
          <MyButton className={"button__light"}>Sign In</MyButton>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default WellcomePage;
