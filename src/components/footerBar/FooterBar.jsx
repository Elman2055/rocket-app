import footerUpImage from "../../../public/footerUpImage.png";
import footerBottomImage from "../../../public/footerBottomImage.png";
import logoFooter from "../../../public/logoFooter.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useDesktop from "../hooks/useDesktop";
import MobileFooterBar from "./MobileFooterBar";
import "./FooterBar.css";

export const FooterBar = () => {
  const navigate = useNavigate();
  const isDesktop = useDesktop();
  const [openSections, setOpenSections] = useState({
    main: false,
    categories: false,
    contacts: false,
    requisites: false,
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
            <p>
              <a
                href="https://approcket.kz/api/user/documents/privacy-policy.pdf"
                target="_blank"
              >
                Политика конфиденциальности
              </a>
            </p>
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
            <p>
              <a
                href="https://approcket.kz/api/user/documents/public-offer.pdf"
                target="_blank"
              >
                Публичная Оферта
              </a>
            </p>
          </div>

          <div className="fourColumn">
            <p>
              Компания: <br /> TOO "Ar&Ad Group"
            </p>
            <p>
              Руководитель: <br /> Рахматулаев Диас Дулатулы
            </p>
            <p>
              Адрес: Казахстан, <br /> город Алматы, Алмалинский <br /> район,
              улица Брусиловского, <br /> дом 167, кв. 1476
            </p>
            <p>БИН: 240840002698</p>
            <p>
              Расчетный счет: <br /> KZ6596502F0016417576
            </p>
            <p>Банк: АО "Kaspi Bank”</p>
            <p>БИК: CASPKZKA</p>
          </div>

          <div className="footerColumn">
            <div className="footerTitle">
              <p>Контакты</p>
              <p> +7 (701) 772-11-62</p>
              <p>diss_r@mail.ru</p>
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
          <MobileFooterBar
            handleToggle={handleToggle}
            openSections={openSections}
            renderDropdown={renderDropdown}
          />
        </>
      )}

      <img src={footerBottomImage} alt="footerBottomImage" width={"100%"} />
    </div>
  );
};

export default FooterBar;
