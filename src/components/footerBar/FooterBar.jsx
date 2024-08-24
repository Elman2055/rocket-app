import footerUpImage from "../../../public/footerUpImage.png";
import footerBottomImage from "../../../public/footerBottomImage.png";
import logoFooter from "../../../public/logoFooter.png";
import { useNavigate } from "react-router-dom";
import "./FooterBar.css";

export const FooterBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        src={footerUpImage}
        alt="footerUpImage"
        style={{ width: "100%", marginTop: "30px" }}
      />

      <div className="footerContainer">
        <div className="logo">
          <img
            src={logoFooter}
            alt="logoFooter"
            style={{ height: "79px", width: "150px" }}
          />
          <p>© Copyright 2024 AppRocket</p>
        </div>

        <div className="footerColumn">
          <div className="footerTitle">
            <p
              onClick={() => {
                navigate({ pathname: "/" });
                window.scrollTo({ top: 0 });
              }}
            >
              Основные страницы
            </p>
            <p
              onClick={() => {
                navigate({ pathname: "/categories" });
                window.scrollTo({ top: 0 });
              }}
            >
              Каталог
            </p>
            <p
              onClick={() => {
                navigate({ pathname: "/answers" });
                window.scrollTo({ top: 0 });
              }}
            >
              FAQ
            </p>
            <p
              onClick={() => {
                navigate({ pathname: "/about" });
                window.scrollTo({ top: 0 });
              }}
            >
              О нас
            </p>
            <p
              onClick={() => {
                navigate({ pathname: "/contacts" });
                window.scrollTo({ top: 0 });
              }}
            >
              Контакты
            </p>
          </div>
          <p>Политика конфиденциальности</p>
        </div>

        <div className="footerColumn">
          <div className="footerTitle">
            <p
              onClick={() => {
                navigate({ pathname: "/categories" });
                window.scrollTo({ top: 0 });
              }}
            >
              Категории
            </p>
            <p
              onClick={() => {
                navigate({ pathname: "/catalog/3" });
                window.scrollTo({ top: 0 });
              }}
            >
              Игры
            </p>
            <p
              onClick={() => {
                navigate({ pathname: "/catalog/4" });
                window.scrollTo({ top: 0 });
              }}
            >
              Утилиты
            </p>
            <p
              onClick={() => {
                navigate({ pathname: "/catalog/2" });
                window.scrollTo({ top: 0 });
              }}
            >
              Образование
            </p>
            <p
              onClick={() => {
                navigate({ pathname: "/catalog/8" });
                window.scrollTo({ top: 0 });
              }}
            >
              Финансы
            </p>
          </div>
          <p>Публичная Оферта</p>
        </div>

        <div className="fourColumn">
          <p>Социальные сети</p>
          <p>Покупки</p>
          <p>Спорт</p>
          <p>Бизнес</p>
        </div>

        <div className="footerColumn">
          <div className="footerTitle">
            <p>Контакты</p>
            <p>+7 (495) 123-45-67</p>
            <p>info@example.com</p>
            <p>Telegram</p>
            <p>Instagram</p>
          </div>
          <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Вернуться наверх
          </p>
        </div>
      </div>

      <img src={footerBottomImage} alt="footerBottomImage" width={"100%"} />
    </div>
  );
};

export default FooterBar;
