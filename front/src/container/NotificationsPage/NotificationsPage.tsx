import React from "react";
import "./NotificationsPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";

const NotificationsPage = () => {
  return (
    <div className="not__main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="not__block">
        <div className="not__title">Notifications</div>
        <div className="not__container">
          <div className="not__img">
            <img src="/svg/announ.svg" alt="Icon" />
          </div>
          <div className="not__message__container">
            <div className="not__message">New reward system</div>
            <div className="not__info">
              10 min. ago&nbsp; &#8226; &nbsp;Announcement
            </div>
          </div>
        </div>
        <div className="not__container">
          <div className="not__img">
            <img src="/svg/warning.svg" alt="Icon" />
          </div>
          <div className="not__message__container">
            <div className="not__message">New reward system</div>
            <div className="not__info">
              10 min. ago&nbsp; &#8226; &nbsp;Warning
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
