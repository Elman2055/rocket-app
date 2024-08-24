import rightOwnImage from "../../../public/rightOwnImage.png";
import logo from "../../../public/logoFooter.png";
import "./AdminLogin.css";

const AdminLogin = () => {
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
      <div className="rightBlock">
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
        <button className="lgAdminBtn">Войти</button>
      </div>
    </div>
  );
};

export default AdminLogin;
