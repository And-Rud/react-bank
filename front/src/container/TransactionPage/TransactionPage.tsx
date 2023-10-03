import React from "react";
import "./TransactionPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import Footer from "../../component/footer/Footer";

const TransactionPage = () => {
  return (
    <div className="transaction">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="trans_content">
        <h1 className="trans_content__title">Transaction</h1>
        <div className="trans__mount">+ $100.20</div>
      </div>
      <div className="trans__table">
        <div className="trans__table__date">
          <div className="trans__table__date__1">Date</div>
          <div className="trans__table__date__2">25 May, 15:20</div>
        </div>
        <div className="trans__table__address">
          <div className="trans__table__address__1">Address</div>
          <div className="trans__table__address__2">user@mail.com</div>
        </div>
        <div className="trans__table__type">
          <div className="trans__table__type__1">Type</div>
          <div className="trans__table__type__2">Recive</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TransactionPage;
