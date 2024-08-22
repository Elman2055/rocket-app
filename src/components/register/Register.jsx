import { Link } from "react-router-dom";
import rightOwnImage from "../../../public/rightOwnImage.png";
import "./Register.css";

const Register = () => {
  return (
    <div className="registerContainer">
      <div className="registerBlock">
        <img src={rightOwnImage} alt="app" className="registerImage" />
        <div className="registerUserInfo">
          <h2>Зарегистрироваться</h2>
          <p>Введите свои данные для создания учетной записи</p>
          <input type="text" placeholder="Имя*" />
          <input type="text" placeholder="Фамилия*" />
          <input type="text" placeholder="Адрес электронной почты*" />
          <input type="text" placeholder="Пароль*" />

          <button className="registerBtn">Зарегистрироваться</button>
          <div>
            <h2>У вас уже есть аккаунт?</h2>
            <Link to={'/login'}>
              <button className="canLoginBtn">Авторизоваться</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
