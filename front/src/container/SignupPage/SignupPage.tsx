import React, { useContext, useState } from "react";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import MyButton from "../../component/mybutton/MyButton";
import MyAlert from "../../component/alert/MyAlert";
import Footer from "../../component/footer/Footer";
import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext, AuthContextType } from "../../App";

const SignupPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const [message, setMessage] = useState(false);
  const { dispatch } = useContext(AuthContext) as AuthContextType;
  const handleSplitClick = () => {
    if (hide) setHide(false);
    if (!hide) setHide(true);
  };
  const handleClick = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/signup",
        formData
      );
      const data = response.data;
      const auth = data.session.token;
      const user = data.session.user;
      const code = data.confirm.code;
      console.log("response", response.data);

      if (dispatch) {
        dispatch({ type: "LOGIN", payload: { token: auth, user: user } });
      }
      setTimeout(() => alert(JSON.stringify({ code: code })), 1000);

      if (response) {
        return navigate("/signup-confirm");
      } else {
        console.log(response);
      }

      console.log("Відповідь від сервера:", data, data.session.token);
    } catch (error) {
      console.log("Помилка відправки запиту:", error);
      setMessage(true);
      setTimeout(() => setMessage(false), 3000);
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
          <h1>Sign up</h1>
          <p>Choose a registration method</p>
        </div>
        <form onSubmit={handleClick} className="container">
          <MyInput
            value={formData.email}
            onChange={handleChange}
            name="email"
            text="Email"
            type="email"
          />
          <MyInput
            value={formData.password}
            onChange={handleChange}
            name="password"
            text="Password"
            type={hide ? "password" : "text"}
          />
          <img
            onClick={handleSplitClick}
            className="signup__input__img"
            src={hide ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt=""
          />
          <div>
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
          <MyButton type="submit" className={"button__dark"}>
            Continue
          </MyButton>
          {message ? <MyAlert /> : <div></div>}
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SignupPage;
