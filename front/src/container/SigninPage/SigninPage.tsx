import React, { useContext, useState } from "react";
import "./SigninPage.css";
import Header from "../../component/header/Header";
import Arrowback from "../../component/arrow-back/Arrow-back";
import MyInput from "../../component/input/MyInput";
import Footer from "../../component/footer/Footer";
import MyButton from "../../component/mybutton/MyButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext, AuthContextType } from "../../App";

const SigninPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { dispatch } = useContext(AuthContext) as AuthContextType;
  const [hide, setHide] = useState(true);
  const handleSplitClick = () => {
    if (hide) setHide(false);
    if (!hide) setHide(true);
  };
  const handleClick = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/signin",
        formData
      );
      console.log("response", response);
      const data = response.data;
      const auth = data.session.token;
      const user = data.session.user;

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
          <h1>Sign in</h1>
          <p>Select login method</p>
        </div>
        <form onSubmit={handleClick} className="container">
          <MyInput
            value={formData.email}
            name="email"
            text="Email"
            type="email"
            onChange={handleChange}
          />
          <MyInput
            value={formData.password}
            name="password"
            text="Password"
            type={hide ? "password" : "text"}
            onChange={handleChange}
          />
          <img
            onClick={handleSplitClick}
            className="signin__input__img"
            src={hide ? "/svg/eye.svg" : "/svg/eye_hide.svg"}
            alt="Eye"
          />
          {/* <div>Sorry, the password is too simple</div> */}
          <div>
            Forgot your password? <Link to="/recovery">Restore</Link>
          </div>
          <MyButton type="submit" className={"button__dark"}>
            Continue
          </MyButton>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SigninPage;
