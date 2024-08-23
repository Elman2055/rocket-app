import React, { useState } from "react";
import centerImage from "../../../public/CenterLayot.png";
import likeImage from "../../../public/like.png";
import searchImage from "../../../public/search.png";
import shopImage from "../../../public/shop.png";
import Cart from "../cart/Cart";
import SearchWithSuggestions from "../search/Search";
import "./ToolBar.css";
import { NavLink } from "react-router-dom";
import { setIsOpenCart } from "../../store/products.slice";
import { useAppDispatch } from "../../store";

const ToolBar = () => {
  const dispatch = useAppDispatch();
  const [isOpenSearch, setIsOpenSearch] = useState(false);

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
            <div className="imageRightBlock">
              <NavLink to={"/favourites"}>
                <img src={likeImage} alt="likeImage" />
              </NavLink>
              <NavLink onClick={() => setIsOpenSearch(true)}>
                <img src={searchImage} alt="searchImage" />
              </NavLink>
              <NavLink onClick={() => dispatch(setIsOpenCart(true))}>
                <img src={shopImage} alt="shopImage" />
              </NavLink>
            </div>
            <NavLink to={"/login"}>
              <button className="layotBtn">Войти</button>
            </NavLink>
            <NavLink to={"/register"}>
              <button className="layotBtn rightLayotBtn">Регистрация</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Cart />
      <SearchWithSuggestions
        setIsOpenSearch={setIsOpenSearch}
        isOpenSearch={isOpenSearch}
      />
    </>
  );
};

export default ToolBar;
