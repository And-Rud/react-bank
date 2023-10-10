import React, { useState, useContext } from "react";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import MyButton from "../../component/mybutton/MyButton";
import Footer from "../../component/footer/Footer";
import { useNavigate } from "react-router-dom";
import "./RecoveryConfirmPage.css";
import axios from "axios";
import { AuthContext, AuthContextType } from "../../App";

const RecoveryConfirmPage = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const handleSplitClick = () => {
    if (hide) setHide(false);
    if (!hide) setHide(true);
  };
  const [formData, setFormData] = useState({ code: "", password: "" });
  const { dispatch } = useContext(AuthContext) as AuthContextType;

  const handleClick = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/recovery-confirm",
        formData
      );
      console.log("response", response);
      const data = response.data;
      const auth = data.session.token;
      const user = data.session.user;

      setFormData({ code: "", password: "" });
      if (dispatch) {
        dispatch({ type: "LOGIN", payload: { token: auth, user: user } });
      }

      if (response) {
        return navigate("/balance");
      } else {
        console.log(response);
      }

      console.log("Відповідь від сервера:", response);
    } catch (error) {
      console.log("Помилка відправки запиту:", error);
    }
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <Header className={"header__dark"} />
      <Arrowback />
      <div className="main">
        <div className="text_content">
          <h1>Recover password</h1>
          <p>Write the code you received</p>
        </div>
        <form onSubmit={handleClick} className="container">
          <MyInput
            onChange={handleChange}
            value={formData.code}
            name="code"
            text="Code"
            type="text"
          />
          <MyInput
            name="password"
            text="New Password"
            type={hide ? "password" : "text"}
            onChange={handleChange}
            value={formData.password}
          />
          <img
            onClick={handleSplitClick}
            className="reccov__input__img"
            src={hide ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
          <MyButton type="submit" className={"button__dark"}>
            Restore password
          </MyButton>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default RecoveryConfirmPage;
