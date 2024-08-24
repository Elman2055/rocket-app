import { Link } from "react-router-dom";
import rightOwnImage from "../../../public/rightOwnImage.png";
import { useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { setIsAuthUser } from "../../store/products.slice";
import "./Login.css";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="loginContainer">
      <div className="loginBlock">
        <img src={rightOwnImage} alt="app" className="loginImage" />
        <div className="loginUserInfo">
          <h2>Вход</h2>
          <p>Введите, пожалуйста, ваш адрес электронной почты и пароль</p>
          <input type="text" placeholder="Почта" />
          <input type="text" placeholder="Пароль" />
          <Link to={"/password"} className="forgotPasswordLink">
            <span>Забыли пароль?</span>
          </Link>
          <button
            className="loginBtn"
            onClick={() => {
              dispatch(setIsAuthUser(true));
              navigate({ pathname: "/profile" });
            }}
          >
            Войти
          </button>
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
