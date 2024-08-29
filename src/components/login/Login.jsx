import { Link } from "react-router-dom";
import rightOwnImage from "../../../public/rightOwnImage.png";
import useDesktop from "../hooks/useDesktop";
import "./Login.css";

const Login = ({ email, setEmail, password, setPassword, onSubmit, error }) => {
  const isDesktop = useDesktop();

  return (
    <div className="loginContainer">
      <div className="loginBlock">
        {isDesktop ? (
          <img src={rightOwnImage} alt="app" className="loginImage" />
        ) : (
          <></>
        )}
        <div className="loginUserInfo">
          <h2>Вход</h2>
          <p>Введите, пожалуйста, ваш адрес электронной почты и пароль</p>
          <form onSubmit={onSubmit}>
            <div className="loginItem">
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="loginLabel">Почта</label>
            </div>
            <div className="loginItem">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="loginLabel">Пароль</label>
            </div>
            {error && <p className="errorText">{error}</p>}  
            <Link to={"/password"} className="forgotPasswordLink">
              <span>Забыли пароль?</span>
            </Link>
            <button className="loginBtn" type="submit">
              Войти
            </button>
          </form>
          <div>
            <h2>Еще не зарегистрировались?</h2>
            <Link to={"/register"}>
              <button className="canRegisterBtn">Зарегистрироваться</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
