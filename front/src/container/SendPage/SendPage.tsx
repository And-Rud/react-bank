import React from "react";
import "./SendPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import Footer from "../../component/footer/Footer";
import MyInput from "../../component/input/MyInput";
import MyButton from "../../component/mybutton/MyButton";

const SendPage = () => {
  return (
    <div className="send__main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="send__page">
        <div className="send__title">Send</div>
        <form method="POST" className="send__form">
          <MyInput name="email" text="Email" type="email" />
          <MyInput name="sum" text="Sum" type="text" />
          <MyButton className={"button__dark"}>Send</MyButton>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SendPage;
