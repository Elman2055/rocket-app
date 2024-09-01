import footerUpImage from "../../../public/footerUpImage.png";
import footerBottomImage from "../../../public/footerBottomImage.png";
import logoFooter from "../../../public/logoFooter.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useDesktop from "../hooks/useDesktop";
import arrow from "../../../public/arrow.png";
import "./FooterBar.css";

export const FooterBar = () => {
  const navigate = useNavigate();
  const isDesktop = useDesktop();
  const [openSections, setOpenSections] = useState({
    main: false,
    categories: false,
    contacts: false,
  });

  const handleToggle = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderDropdown = (items) => (
    <div className="dropdownMenu">
      {items.map(({ label, path }) => (
        <p
          key={label}
          onClick={() => {
            navigate({ pathname: path });
            window.scrollTo({ top: 0 });
          }}
          style={{ fontSize: "18px", marginTop: "20px", cursor: "pointer" }}
        >
          {label}
        </p>
      ))}
    </div>
  );

  return (
    <div>
      <img
        src={footerUpImage}
        alt="footerUpImage"
        style={{ width: "100%", marginTop: "30px" }}
      />

      {isDesktop ? (
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
            <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Вернуться наверх
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="footerContainerMobile">
            <div className="footerColumn">
              <div className="footerTitle">
                <p
                  onClick={() => handleToggle("main")}
                  className="navigationMobile"
                >
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
                      transform: openSections.categories
                        ? "rotate(180deg)"
                        : "none",
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
                      transform: openSections.contacts
                        ? "rotate(180deg)"
                        : "none",
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

            <div className="logo">
              <img
                src={logoFooter}
                alt="logoFooter"
                style={{ height: "49px", width: "90px", marginTop: "30px" }}
              />
              <p className="downTitleMobile">© Copyright 2024 Site.pro</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className="downTitleMobile">Политика конфиденциальности</p>
              <p className="downTitleMobile">Публичная Оферта</p>
            </div>
          </div>
        </>
      )}

      <img src={footerBottomImage} alt="footerBottomImage" width={"100%"} />
    </div>
  );
};

export default FooterBar;
