import React from "react";
import "./RecivePage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import Footer from "../../component/footer/Footer";
import MyInput from "../../component/input/MyInput";
import { Link } from "react-router-dom";

const RecivePage = () => {
  return (
    <div className="rec__main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="rec__page">
        <div className="rec__title">Receive</div>
        <form method="POST" className="rec__form">
          <MyInput name="sum" text="Receive amount" type="text" />
          <div>Payment system</div>
          <div className="rec__link__conteiner">
            <Link className="rec__link" to="/transaction/:transactionId">
              <div className="rec__pay">
                <span className="rec__icon">S</span>
                <div className="rec__name">Stripe</div>
                <div className="rec__icon__module">
                  <img src="/svg/stripe.svg" alt="" />
                </div>
              </div>
            </Link>
            <Link className="rec__link" to="/transaction/:transactionId">
              <div className="rec__pay">
                <span className="rec__icon">C</span>
                <div className="rec__name">Coinbase</div>
                <div className="rec__icon__module">
                  <img src="/svg/coinbase.svg" alt="" />
                </div>
              </div>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RecivePage;
