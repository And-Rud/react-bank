import React from "react";
import "./BalancePage.css";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";

const BalancePage = () => {
  return (
    <div>
      <div className="balance_info">
        <Header className={"header__light"} />
        <div className="bal__title">
          <Link to="/settings">
            <img src="/svg/menu.svg" alt="Menu" />
          </Link>
          <span className="bal__title__text">Main wallet</span>
          <Link to="/notifications">
            <img src="/svg/notif.svg" alt="Notifications" />
          </Link>
        </div>
        <div className="bal__money">$ 100.20</div>
      </div>
      <Link to="/recive">
        <img className="bal_rec_img" src="/svg/receive.svg" alt="Receive" />
      </Link>
      <Link to="/send">
        <img className="bal_send_img" src="/svg/send.svg" alt="Send" />
      </Link>
      <div className="bal__button__text">
        <span className="bal__span__1">Receive </span>
        <span>Send</span>
      </div>
      <Link className="bal__user__link" to="/transaction/:transactionId">
        <div className="bal__user">
          <span className="bal__user__icon">S</span>
          <div className="bal__user__name__block">
            <div className="bal__user__name">Stripe</div>
            <div className="bal__user__info">
              <div className="bal__user__time"> 12:25 </div>
              <span className="bal__user__dot"> &nbsp; &#8226; &nbsp; </span>
              <div className="bal__user__action"> Receipt</div>
            </div>
          </div>
          <div className="bal__mount bal__mount__plus">+ $125.00</div>
        </div>
      </Link>

      <Footer />
    </div>
  );
};

export default BalancePage;
