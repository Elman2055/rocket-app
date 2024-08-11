import footerUpImage from "../../../public/footerUpImage.png";
import footerBottomImage from "../../../public/footerBottomImage.png";
import logoFooter from "../../../public/logoFooter.png";
import "./FooterBar.css";

export const FooterBar = () => {
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
            <p>Основные страницы</p>
            <p>Каталог</p>
            <p>FAQ</p>
            <p>О нас</p>
            <p>Контакты</p>
          </div>
          <p>Политика конфиденциальности</p>
        </div>

        <div className="footerColumn">
          <div className="footerTitle">
            <p>Категории</p>
            <p>Игры</p>
            <p>Утилиты</p>
            <p>Образование</p>
            <p>Финансы</p>
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
          <p>Вернуться наверх</p>
        </div>
      </div>

      <img src={footerBottomImage} alt="footerBottomImage" width={"100%"} />
    </div>
  );
};

export default FooterBar;
