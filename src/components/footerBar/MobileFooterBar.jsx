import arrow from "../../../public/arrow.png";
import logoFooter from "../../../public/logoFooter.png";
import "./FooterBar.css";

const MobileFooterBar = ({ handleToggle, openSections, renderDropdown }) => {
  return (
    <div className="footerContainerMobile">
      <div className="footerColumn">
        <div className="footerTitle">
          <p onClick={() => handleToggle("main")} className="navigationMobile">
            Основные страницы{" "}
            <img
              src={arrow}
              alt="arrow"
              style={{
                transform: openSections.main ? "rotate(180deg)" : "none",
                transition: "transform 0.3s ease",
              }}
            />
          </p>
          {openSections.main &&
            renderDropdown([
              { label: "Каталог", path: "/categories" },
              { label: "FAQ", path: "/answers" },
              { label: "О нас", path: "/about" },
              { label: "Контакты", path: "/contacts" },
            ])}
        </div>
      </div>

      <div className="footerColumn">
        <div className="footerTitle">
          <p
            onClick={() => handleToggle("categories")}
            className="navigationMobile"
          >
            Категории{" "}
            <img
              src={arrow}
              alt="arrow"
              style={{
                transform: openSections.categories ? "rotate(180deg)" : "none",
                transition: "transform 0.3s ease",
              }}
            />
          </p>
          {openSections.categories &&
            renderDropdown([
              { label: "Игры" },
              { label: "Утилиты" },
              { label: "Образование" },
              { label: "Финансы" },
            ])}
        </div>
      </div>

      <div className="footerColumn">
        <div className="footerTitle">
          <p
            onClick={() => handleToggle("contacts")}
            className="navigationMobile"
          >
            Контакты{" "}
            <img
              src={arrow}
              alt="arrow"
              style={{
                transform: openSections.contacts ? "rotate(180deg)" : "none",
                transition: "transform 0.3s ease",
              }}
            />
          </p>
          {openSections.contacts && (
            <>
              <div className="contactsMobile">
                <p>+7 (495) 123-45-67</p>
                <p>info@example.com</p>
                <p>Telegram</p>
                <p>Instagram</p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="footerColumn">
        <div className="footerTitle">
          <p
            onClick={() => handleToggle("requisites")}
            className="navigationMobile"
          >
            Реквизиты{" "}
            <img
              src={arrow}
              alt="arrow"
              style={{
                transform: openSections.requisites ? "rotate(180deg)" : "none",
                transition: "transform 0.3s ease",
              }}
            />
          </p>
          {openSections.requisites && (
            <>
              <div className="contactsMobile">
                <p>Компания: TOO "Ar&Ad Group</p>
                <p>Руководитель: Рахматулаев Диас Дулатулы</p>
                <p>
                  Адрес: Казахстан, город Алматы, Алмалинский район, улица
                  Брусиловского, дом 167, кв. 1476
                </p>
                <p>БИН 240840002698</p>
                <p>Расчетный счет: KZ6596502F0016417576</p>
                <p>Банк: АО "Kaspi Bank”</p>
                <p>БИК: CASPKZKA</p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="logo">
        <img
          src={logoFooter}
          alt="logoFooter"
          style={{ height: "49px", width: "90px", marginTop: "30px" }}
        />
        <p className="downTitleMobile">© Copyright 2024 Site.pro</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="downTitleMobile">
          <a
            href="https://approcket.kz/api/user/documents/privacy-policy.pdf"
            target="_blank"
          >
            Политика конфиденциальности
          </a>
        </p>
        <p className="downTitleMobile">
          <a
            href="https://approcket.kz/api/user/documents/public-offer.pdf"
            target="_blank"
          >
            Публичная Оферта
          </a>
        </p>
      </div>
    </div>
  );
};

export default MobileFooterBar;
