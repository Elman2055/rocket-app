import React, { useState } from "react";
import centerImage from "../../../public/CenterLayot.png";
import likeImage from "../../../public/like.png";
import searchImage from "../../../public/search.png";
import shopImage from "../../../public/shop.png";
import SearchWithSuggestions from "../search/Search";
import userImage from "../../../public/user.png";
import closeImage from "../../../public/closeImage.png";
import { useAppDispatch } from "../../store";
import { setIsEdit } from "../../store/products.slice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authContext/AuthContext";
import useDesktop from "../hooks/useDesktop";
import Cart from "../cart/Cart";
import "./ToolBar.css";

const ToolBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isDesktop = useDesktop();
  const { user, userData, logout } = useAuth();

  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      setIsOpenCart(true);
      setIsOpen(false);
    }
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
                <div className={`imageRightBlock ${user && "user"}`}>
                  <NavLink to={user ? "/favourites" : "/login"}>
                    <img src={likeImage} alt="likeImage" />
                  </NavLink>
                  <NavLink onClick={() => setIsOpenSearch(true)}>
                    <img src={searchImage} alt="searchImage" />
                  </NavLink>
                  <div
                    onClick={() => handleClick()}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={shopImage} alt="shopImage" />
                  </div>
                  {user && (
                    <div className="userPosition">
                      <img
                        src={userImage}
                        alt="user"
                        style={{ cursor: "pointer" }}
                        className="userImage"
                        onClick={() => navigate({ pathname: "/profile" })}
                      />
                      <div className="profileCard">
                        <div className="profileCardContent">
                          <p className="profileGreeting">
                            Здравствуйте, {userData.name}
                          </p>
                          <div className="profileDivider"></div>
                          <ul className="profileOptions">
                            <li
                              onClick={() => {
                                dispatch(setIsEdit(true));
                                navigate({ pathname: "/profile" });
                              }}
                            >
                              Редактировать профиль
                            </li>
                            <li
                              onClick={() => {
                                dispatch(setIsEdit(false));
                                navigate({ pathname: "/profile" });
                              }}
                            >
                              Мои заказы
                            </li>
                            <li
                              onClick={() =>
                                navigate({ pathname: "/favourites" })
                              }
                            >
                              Избранное
                            </li>
                            <li onClick={logout}>Выйти</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {!user && (
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
                    navigate({
                      pathname: `${user ? "/profile" : "/login"}`,
                    });
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
              <div className="navigationMobileHeader">
                <div className="blockHeaerMobile">
                  <div className="blockHeaerMobile">
                    {isOpen ? (
                      <h3
                        className="close-btn"
                        onClick={toggleSidebar}
                        style={{ marginTop: "8px" }}
                      >
                        <img src={closeImage} alt="close" />
                      </h3>
                    ) : (
                      <h3
                        className="menu-btn"
                        id="menu-btn"
                        onClick={toggleSidebar}
                      >
                        ☰
                      </h3>
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
                      style={{ marginTop: "10px" }}
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
                  <NavLink
                    to={`${user ? "/profile" : "/login"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <img src={userImage} alt="user" className="userImage" />
                  </NavLink>

                  <div
                    onClick={() => handleClick()}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={shopImage} alt="shopImage" />
                  </div>
                </div>
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
