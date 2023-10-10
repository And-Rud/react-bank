import React, { useState, useContext } from "react";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import { useNavigate } from "react-router-dom";
import MyButton from "../../component/mybutton/MyButton";
import Footer from "../../component/footer/Footer";
import axios from "axios";
import { AuthContext, AuthContextType } from "../../App";

const SignupConfirmPage = () => {
  const navigate = useNavigate();
  const { state } = useContext(AuthContext) as AuthContextType;
  const [formData, setFormData] = useState({ code: "", token: "" });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (state) {
      setFormData({ ...formData, [name]: value, token: state.token });
    }
  };
  const handleClick = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/signup-confirm",
        formData
      );
      const data = response.data;

      console.log("state", state);
      console.log(response);
      if (response.status === 200) {
        navigate("/balance");
      } else {
        console.log("Помилка авторизації:", data.message);
      }
      console.log("Відповідь від сервера:", data);
    } catch (error) {
      console.log("Помилка відправки запиту:", error);
    }
  };

  return (
    <div>
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="text_content">
        <h1>Confirm account</h1>
        <p>Write the code you received</p>
      </div>
      <form onSubmit={handleClick} className="container">
        <MyInput
          value={formData.code}
          onChange={handleChange}
          name="code"
          text="Code"
          type="text"
        />

        <MyButton type="submit" className={"button__dark"}>
          Confirm
        </MyButton>
      </form>
      <Footer />
    </div>
  );
};

export default SignupConfirmPage;
