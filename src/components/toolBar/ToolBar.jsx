import React, { useState } from "react";
import centerImage from "../../../public/CenterLayot.png";
import likeImage from "../../../public/like.png";
import searchImage from "../../../public/search.png";
import shopImage from "../../../public/shop.png";
import SearchWithSuggestions from "../search/Search";
import user from "../../../public/user.png";
import { useAppDispatch } from "../../store";
import { setIsEdit } from "../../store/products.slice";
import { useAppSelector } from "../../store";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import "./ToolBar.css";

const ToolBar = () => {
  const dispatch = useAppDispatch();

  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const {
    products: { isAuthUser },
  } = useAppSelector((state) => state);

  return (
    <>
      <div className="toolBar">
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
                  <button className="layotBtn">Войти</button>
                </NavLink>
                <NavLink to={"/register"}>
                  <button className="layotBtn rightLayotBtn">
                    Регистрация
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
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
