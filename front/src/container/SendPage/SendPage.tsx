import React, { useContext, useState } from "react";
import "./SendPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import Footer from "../../component/footer/Footer";
import MyInput from "../../component/input/MyInput";
import MyButton from "../../component/mybutton/MyButton";
import axios from "axios";
import { AuthContext, AuthContextType } from "../../App";

const SendPage = () => {
  const { state } = useContext(AuthContext) as AuthContextType;

  const [formData, setFormData] = useState({
    sum: "",
    sys: "",
    mes: "-",
    id: "",
  });
  const handleClick = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4000/send`, formData);
      const data = response.data;
      setFormData({ sum: "", sys: "", mes: "-", id: state.user.id });
      console.log("Відповідь від сервера:", data);
    } catch (error) {
      console.log("Помилка відправки запиту:", error);
    }
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (formData)
      setFormData({ ...formData, [name]: value, id: state.user.id });
  };
  return (
    <div className="send__main">
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="send__page">
        <div className="send__title">Send</div>
        <form onSubmit={handleClick} className="send__form">
          <MyInput
            onChange={handleChange}
            name="sys"
            text="Email"
            type="email"
            value={formData.sys}
          />
          <MyInput
            onChange={handleChange}
            name="sum"
            text="Sum"
            type="number"
            value={formData.sum}
          />
          <MyButton type="submit" className={"button__dark"}>
            Send
          </MyButton>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SendPage;
