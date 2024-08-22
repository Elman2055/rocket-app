import React from "react";
import centerImage from "../../../public/CenterLayot.png";
import likeImage from "../../../public/like.png";
import searchImage from "../../../public/search.png";
import shopImage from "../../../public/shop.png";
import "./ToolBar.css";
import { NavLink } from "react-router-dom";

const ToolBar = () => {
  return (
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

        <img src={centerImage} alt="logo" />

        <div className="rightBlock">
          <div className="imageRightBlock">
            <NavLink to={"/favourites"}>
              <img src={likeImage} alt="likeImage" />
            </NavLink>
            <NavLink to={"/"}>
              <img src={searchImage} alt="searchImage" />
            </NavLink>
            <NavLink to={"/"}>
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
  );
};

export default ToolBar;
