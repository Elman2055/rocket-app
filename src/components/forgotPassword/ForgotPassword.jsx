import { useState } from "react";
import rightOwnImage from "../../../public/rightOwnImage.png";
import ReactCodeInput from "react-verification-code-input";
import useDesktop from "../hooks/useDesktop";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const isDesktop = useDesktop();
  const [sendLink, setSendLink] = useState(false);

  return (
    <div className="passwordContainer">
      <div className="passwordBlock">
        {isDesktop && (
          <img src={rightOwnImage} alt="app" className="passwordImage" />
        )}
        <div className="passwordUserInfo">
          <h2>{sendLink ? "Введите код" : "Забыли пароль?"}</h2>
          <p>
            Введите свой адрес электронной почты, и мы вышлем вам ссылку для
            сброса пароля
          </p>
          {sendLink ? (
            <>
              <ReactCodeInput
                fields={4}
                fieldWidth={isDesktop ? 105 : 50}  
                fieldHeight={isDesktop ? 40 : 40}  
                placeholder={Array(4).fill("_________")}  
                className="codeInput"
              />

              <button className="passwordBtn">Отправить</button>
            </>
          ) : (
            <>
              <input type="text" placeholder="Адрес электронной почты*" />

              <button className="passwordBtn" onClick={() => setSendLink(true)}>
                Отправить ссылку для сброса пароля
              </button>
            </>
          )}
          <div>
            <h2>У вас уже есть аккаунт?</h2>
            <Link to={"/login"}>
              <button className="canLoginBtn">Авторизоваться</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
