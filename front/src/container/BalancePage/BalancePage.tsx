import React, { useEffect, useState, useContext } from "react";
import "./BalancePage.css";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext, AuthContextType } from "../../App";

const BalancePage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext) as AuthContextType;
  const [info, setInfo] = useState<null | {
    userSum: any;
    user: any;
  }>(null);
  const [card, setCard]: [card: any, setCard: any] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/balance?userId=${state.user.id}`
        );
        let user = response.data;
        if (user) setInfo(user);
        if (user.payment) setCard(user.payment);

        console.log("Отримані дані балансу:", info ? info.userSum : null);
      } catch (error) {
        console.error("Помилка отримання даних балансу:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickBut = (tid: number) => {
    if (tid) {
      console.log("dispatch", tid);
      dispatch({ type: "LOGIN", payload: { currentTid: tid } });
    }
    if (info) navigate(`/transaction/:id:transaction`);
  };

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
          <div className="bal__money">${info.userSum}</div>
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
        {card ? (
          card.reverse().map((item: any, index: number) => (
            <Link
              key={index}
              className="bal__user__link"
              to={`/transaction/${item.tid}`}
            >
              <div className="bal__user">
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
                  {item.mes} ${Math.abs(item.sum)}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>Транзакції відсутні</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BalancePage;
