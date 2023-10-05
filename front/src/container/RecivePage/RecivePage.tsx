import React, { useState, useContext } from "react";
import "./RecivePage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import Footer from "../../component/footer/Footer";
import MyInput from "../../component/input/MyInput";
import axios from "axios";

const RecivePage = () => {
  const [formData, setFormData] = useState({
    sum: "",
    sys: "",
    mes: "+",
  });

  const handleClick = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/recive",
        formData
      );
      const data = response.data;
      setFormData({
        sum: "",
        sys: "",
        mes: "+",
      });
      console.log("Відповідь від сервера:", data);
    } catch (error) {
      console.log("Помилка відправки запиту:", error);
    }
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleButtonClick = (action: string) => {
    if (action === "stripe") {
      setFormData({ ...formData, sys: "Stripe" });
    } else if (action === "coinbase") {
      setFormData({ ...formData, sys: "Coinbase" });
    }
  };
  return (
    <div className="rec__main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="rec__page">
        <div className="rec__title">Recive</div>
        <form className="rec__form" onSubmit={handleClick}>
          <MyInput
            value={formData.sum}
            onChange={handleChange}
            name="sum"
            text="Receive amount"
            type="number"
          />
          <div>Payment system</div>
          <div className="rec__link__conteiner">
            <button type="submit" onClick={() => handleButtonClick("stripe")}>
              <div className="rec__pay">
                <span className="rec__icon">S</span>
                <div className="rec__name">Stripe</div>
                <div className="rec__icon__module">
                  <img src="/svg/stripe.svg" alt="stripe" />
                </div>
              </div>
            </button>

            <button type="submit" onClick={() => handleButtonClick("coinbase")}>
              <div className="rec__pay">
                <span className="rec__icon">C</span>
                <div className="rec__name">Coinbase</div>
                <div className="rec__icon__module">
                  <img src="/svg/coinbase.svg" alt="coinbase" />
                </div>
              </div>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RecivePage;
