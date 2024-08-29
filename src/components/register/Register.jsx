import { Link } from "react-router-dom";
import rightOwnImage from "../../../public/rightOwnImage.png";
import useDesktop from "../hooks/useDesktop";
import "./Register.css";

const Register = ({
  name,
  lastName,
  email,
  password,
  setName,
  setLastName,
  setEmail,
  setPassword,
  onSubmit,
  errors,
}) => {
  const isDesktop = useDesktop();

  return (
    <div className="registerContainer">
      <div className="registerBlock">
        {isDesktop && (
          <img src={rightOwnImage} alt="app" className="registerImage" />
        )}
        <div className="registerUserInfo">
          <h2>Зарегистрироваться</h2>
          <p>Введите свои данные для создания учетной записи</p>
          <form onSubmit={onSubmit}>
            <div className="inputWrapper">
              {errors.name && <div className="errorText">{errors.name}</div>}
              <input
                type="text"
                placeholder="Имя*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="inputWrapper">
              {errors.lastName && (
                <div className="errorText">{errors.lastName}</div>
              )}
              <input
                type="text"
                placeholder="Фамилия*"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="inputWrapper">
              {errors.email && <div className="errorText">{errors.email}</div>}
              <input
                type="email"
                placeholder="Адрес электронной почты*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputWrapper">
              {errors.password && (
                <div className="errorText">{errors.password}</div>
              )}
              <input
                type="password"
                placeholder="Пароль*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="registerBtn" type="submit">
              Зарегистрироваться
            </button>
          </form>
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

export default Register;
