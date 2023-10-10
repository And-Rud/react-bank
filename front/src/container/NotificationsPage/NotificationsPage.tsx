import React, { useContext, useEffect, useState } from "react";
import "./NotificationsPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import { AuthContext, AuthContextType } from "../../App";
import axios from "axios";

const NotificationsPage = () => {
  const { state } = useContext(AuthContext) as AuthContextType;
  const [info, setInfo]: [info: any, setInfo: any] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/notifications?userId=${state.user.id}`
        );
        let user = response.data;
        if (user) setInfo(user);
        console.log("Отримані повідомлення для:", user);
      } catch (error) {
        console.error("Помилка отримання даних балансу:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="not__main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="not__block">
        <div className="not__title">Notifications</div>

        <div className="not__container">
          {info && info.notif.length > 0 ? (
            info.notif.reverse().map((item: any, index: any) => (
              <div key={index} className="not__item">
                <div className="not__img">
                  <img src="/svg/announ.svg" alt="Icon" />
                </div>
                <div className="not__message__container">
                  <div className="not__message">{item.info}</div>
                  <div className="not__info">
                    {item.time}&nbsp; &#8226; &nbsp;Announcement
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Завантаження повідомлень...</div>
          )}
        </div>

        {/* <div className="not__container">
          <div className="not__img">
            <img src="/svg/warning.svg" alt="Icon" />
          </div>
          <div className="not__message__container">
            <div className="not__message">New reward system</div>
            <div className="not__info">
              10 min. ago&nbsp; &#8226; &nbsp;Warning
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NotificationsPage;
