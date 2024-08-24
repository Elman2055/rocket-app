import rightOwnImage from "../../../public/rightOwnImage.png";
import logo from "../../../public/logoFooter.png";
import { Navigate, useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="lgAdminContainer">
      <div className="leftBlockAdmin">
        <div className="leftBlockBg">
          <h2>
            Lorem ipsum dolor <br /> sit amet <br /> consectetur.
          </h2>
        </div>
        <img src={rightOwnImage} alt="app" className="amdinLoginImage" />
      </div>
      <div className="rightBlockProdAdmin">
        <div className="logoBlockAdmin">
          <img src={logo} alt="logo" className="lgLogoAdmin" />
          <h2>Вход</h2>
        </div>
        <div className="inputsLgAdmin">
          <h4>Логин</h4>
          <input type="text" />
        </div>

        <div className="inputsLgAdmin">
          <h4>Пароль</h4>
          <input type="text" />
        </div>
        <button
          className="lgAdminBtn"
          onClick={() => navigate({ pathname: "/admin/categories" })}
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
