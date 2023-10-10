import React, { useState } from "react";
import "./RecoveryPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyButton from "../../component/mybutton/MyButton";
import Footer from "../../component/footer/Footer";
import MyInput from "../../component/input/MyInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RecoveryPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleClick = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/recovery",
        formData
      );
      const data = response.data;

      const code = data.confirm.code;
      setFormData({ email: "" });
      console.log("response", response);

      setTimeout(() => alert(JSON.stringify({ code: code })), 2000);

      if (response) {
        return navigate("/recovery-confirm");
      } else {
        console.log(response);
      }

      console.log("Відповідь від сервера:", response);
    } catch (error) {
      console.log("Помилка відправки запиту:", error);
    }
  };
  return (
    <div>
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="main">
        <div className="text_content">
          <h1>Recover password</h1>
          <p>Choose a recovery method</p>
        </div>
        <form onSubmit={handleClick} className="container">
          <MyInput
            onChange={handleChange}
            name="email"
            text="Email"
            type="email"
            value={formData.email}
          />
          <MyButton type="submit" className={"button__dark"}>
            Send code
          </MyButton>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default RecoveryPage;
