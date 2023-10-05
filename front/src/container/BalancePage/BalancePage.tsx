import React, { useEffect, useState } from "react";
import "./BalancePage.css";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const BalancePage = () => {
  const [info, setInfo] = useState<null | {
    sum: number;
    sys: string;
    mes: string;
    time: string;
  }>(null);
  const [card, setCard]: [card: any, setCard: any] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/balance");
        const {
          sum,
          sys,
          mes,
          time,
        }: { sum: number; sys: string; mes: string; time: string } =
          response.data.reverse()[0];
        if (sum && sys && mes && time) setInfo({ sum, sys, mes, time });
        if (response.data) setCard(response.data);
        console.log("Отримані дані балансу:", { sum, sys, mes, time });
      } catch (error) {
        console.error("Помилка отримання даних балансу:", error);
      }
    };

    fetchData();
  }, []);

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
        {info ? (
          <div className="bal__money">${info.sum}</div>
        ) : (
          <div>Завантаження данних</div>
        )}
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
      <div className="card__item">
        <Link className="bal__user__link" to="/transaction/:transactionId">
          {card ? (
            card.map((item: any, index: number) => (
              <div key={index} className="bal__user">
                <span className="bal__user__icon">
                  {item.sys[0].toUpperCase()}
                </span>
                <div className="bal__user__name__block">
                  <div className="bal__user__name">{item.sys}</div>
                  <div className="bal__user__info">
                    <div className="bal__user__time"> {item.time} </div>
                    <span className="bal__user__dot">
                      &nbsp; &#8226; &nbsp;
                    </span>
                    <div className="bal__user__action"> Receipt</div>
                  </div>
                </div>
                <div
                  className={`bal__mount ${
                    item.mes === "+" ? "bal__mount__plus" : "bal__mount__minus"
                  } `}
                >
                  {item.mes} ${item.sum}
                </div>
              </div>
            ))
          ) : (
            <div>Завантаження данних</div>
          )}
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default BalancePage;
