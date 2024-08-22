import { useState } from "react";
import rightOwnImage from "../../../public/rightOwnImage.png";
import ReactCodeInput from "react-verification-code-input";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [sendLink, setSendLink] = useState(false);

  return (
    <div className="passwordContainer">
      <div className="passwordBlock">
        <img src={rightOwnImage} alt="app" className="passwordImage" />
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
                fieldWidth={105}
                fieldHeight={40}
                placeholder={[
                  `_________`,
                  "_________",
                  "_________",
                  "_________",
                ]}
                className="codeInput"
              />

              <button className="passwordBtn">Отправить</button>
            </>
          ) : (
            <>
              <input type="text" placeholder="Адрес электронной почты*" />

              <button className="passwordBtn" onClick={() => setSendLink(true)}>
                Отравить ссылку для сброса пароля
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
