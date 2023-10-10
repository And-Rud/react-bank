import React, { useContext, useEffect, useState } from "react";
import "./TransactionPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import Footer from "../../component/footer/Footer";
import { AuthContext, AuthContextType } from "../../App";
import axios from "axios";
import { useParams } from "react-router-dom";

interface TransactionInfo {
  sum: number;
  sys: string;
  mes: string;
  time: string;
}

const TransactionPage = () => {
  const { transactionId } = useParams();
  const { state } = useContext(AuthContext) as AuthContextType;
  const [info, setInfo] = useState<TransactionInfo | null>(null);
  console.log("transactionId", transactionId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/transaction?transactionId=${transactionId}&id=${state.user.id}`
        );
        let res = response.data;
        if (res) setInfo(res);
        console.log("Отримані повідомлення для:", res);
      } catch (error) {
        console.error("Помилка отримання даних балансу:", error);
      }
    };

    fetchData();
  }, []);

  let getCurrentDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${day} ${month}`;
  };
  const currentDate = getCurrentDate();

  return (
    <div className="transaction">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="trans_content">
        <h1 className="trans_content__title">Transaction</h1>
        <div
          className={`trans__mount ${
            info ? (
              info.mes === "+" ? (
                "trans__mount__plus"
              ) : (
                "trans__mount__minus"
              )
            ) : (
              <div>Loading...</div>
            )
          } `}
        >
          {info ? (
            info.mes === "+" ? (
              `+$${info.sum}`
            ) : (
              `-$${Math.abs(info.sum)}`
            )
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <div className="trans__table">
        <div className="trans__table__date">
          <div className="trans__table__date__1">Date</div>
          <div className="trans__table__date__2">
            {currentDate}, {info ? info.time : <div>Loading...</div>}
          </div>
        </div>
        <div className="trans__table__address">
          <div className="trans__table__address__1">Address</div>
          <div className="trans__table__address__2">
            {info ? info.sys : <div>Loading...</div>}
          </div>
        </div>
        <div className="trans__table__type">
          <div className="trans__table__type__1">Type</div>
          <div className="trans__table__type__2">
            {info && info.mes === "+" ? "Recive" : "Send"}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TransactionPage;
