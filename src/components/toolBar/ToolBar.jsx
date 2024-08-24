import React, { useState } from "react";
import centerImage from "../../../public/CenterLayot.png";
import likeImage from "../../../public/like.png";
import searchImage from "../../../public/search.png";
import shopImage from "../../../public/shop.png";
import SearchWithSuggestions from "../search/Search";
import user from "../../../public/user.png";
import closeImage from "../../../public/closeImage.png";
import { useAppDispatch } from "../../store";
import { setIsEdit } from "../../store/products.slice";
import { useAppSelector } from "../../store";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useDesktop from "../hooks/useDesktop";
import Cart from "../cart/Cart";
import "./ToolBar.css";

const ToolBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isDesktop = useDesktop();

  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const {
    products: { isAuthUser },
  } = useAppSelector((state) => state);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="toolBar">
        {isDesktop ? (
          <>
            <div className="container">
              <div className="leftBlock">
                <NavLink to={"/categories"}>
                  <h3>Каталог</h3>
                </NavLink>
                <NavLink to={"/answers"}>
                  <h3>FAQ</h3>
                </NavLink>
                <NavLink to={"/about"}>
                  <h3>О нас</h3>
                </NavLink>
                <NavLink to={"/contacts"}>
                  <h3>Контакты</h3>
                </NavLink>
              </div>

              <NavLink to={"/"} style={{ marginTop: "5px" }}>
                <img src={centerImage} alt="logo" />
              </NavLink>

              <div className="rightBlock">
                <div className={`imageRightBlock ${isAuthUser && "user"}`}>
                  <NavLink to={"/favourites"}>
                    <img src={likeImage} alt="likeImage" />
                  </NavLink>
                  <NavLink onClick={() => setIsOpenSearch(true)}>
                    <img src={searchImage} alt="searchImage" />
                  </NavLink>
                  <NavLink onClick={() => setIsOpenCart(true)}>
                    <img src={shopImage} alt="shopImage" />
                  </NavLink>
                  {isAuthUser && (
                    <NavLink to={"/profile"}>
                      <div className="userPosition">
                        <img src={user} alt="user" className="userImage" />
                        <div className="profileCard">
                          <div className="profileCardContent">
                            <p className="profileGreeting">
                              Здравствуйте, Александр
                            </p>
                            <div className="profileDivider"></div>
                            <ul className="profileOptions">
                              <li onClick={() => dispatch(setIsEdit(true))}>
                                Редактировать профиль
                              </li>
                              <li onClick={() => dispatch(setIsEdit(false))}>
                                Мои заказы
                              </li>
                              <li>Избранное</li>
                              <li>Выйти</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  )}
                </div>
                {!isAuthUser && (
                  <>
                    <NavLink to={"/login"}>
                      <button className="layotBtnProd">Войти</button>
                    </NavLink>
                    <NavLink to={"/register"}>
                      <button className="layotBtnProd rightLayotBtnReg">
                        Регистрация
                      </button>
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`sidebar ${isOpen ? "open" : ""}`} id="sidebar">
              <ul className="nav-list">
                <li
                  style={{ paddingTop: "14%" }}
                  onClick={() => {
                    navigate({ pathname: "/profile" });
                    setIsOpen(false);
                  }}
                >
                  Мой аккаунт
                </li>
                <li
                  onClick={() => {
                    navigate({ pathname: "/categories" });
                    setIsOpen(false);
                  }}
                >
                  Каталог
                </li>
                <li
                  onClick={() => {
                    navigate({ pathname: "/answers" });
                    setIsOpen(false);
                  }}
                >
                  FAQ
                </li>
                <li
                  onClick={() => {
                    navigate({ pathname: "/about" });
                    setIsOpen(false);
                  }}
                >
                  О нас
                </li>
                <li
                  onClick={() => {
                    navigate({ pathname: "/contacts" });
                    setIsOpen(false);
                  }}
                >
                  Контакты
                </li>
              </ul>
            </div>

            <div className="headerMobile">
              <div className="blockHeaerMobile">
                <div className="blockHeaerMobile">
                  {isOpen ? (
                    <button className="close-btn" onClick={toggleSidebar}>
                      <img src={closeImage} alt="close" />
                    </button>
                  ) : (
                    <button
                      className="menu-btn"
                      id="menu-btn"
                      onClick={toggleSidebar}
                    >
                      ☰
                    </button>
                  )}
                </div>
                <NavLink
                  onClick={() => {
                    setIsOpenSearch(true);
                    setIsOpen(false);
                  }}
                >
                  <img
                    src={searchImage}
                    alt="searchImage"
                    style={{ marginTop: "5px" }}
                  />
                </NavLink>
              </div>

              <NavLink
                to={"/"}
                style={{ marginTop: "5px" }}
                onClick={() => setIsOpen(false)}
              >
                <img src={centerImage} alt="logo" style={{ width: "60px" }} />
              </NavLink>

              <div className="blockHeaerMobile">
                <NavLink to={"/profile"} onClick={() => setIsOpen(false)}>
                  <img src={user} alt="user" className="userImage" />
                </NavLink>

                <NavLink
                  onClick={() => {
                    setIsOpenCart(true);
                    setIsOpen(false);
                  }}
                >
                  <img src={shopImage} alt="shopImage" />
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
      <Cart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
      <SearchWithSuggestions
        setIsOpenSearch={setIsOpenSearch}
        isOpenSearch={isOpenSearch}
      />
    </>
  );
};

export default ToolBar;
