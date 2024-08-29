import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import useDesktop from "../hooks/useDesktop";
import closeImage from "../../../public/closeImage.png";
import bancking from "../../../public/banckingApp.png";
import calendar from "../../../public/calendarApp.png";
import fitnes from "../../../public/fitnesApp.png";
import "./Cart.css";
import RocketApi from "../../services/rocketApi";

const Cart = ({ isOpenCart, setIsOpenCart }) => {
  const isDesktop = useDesktop();

  const getCartProducts = async () => {
    const response = await RocketApi.getCartProducts();
  };

  const choiceItems = [
    {
      id: 1,
      image: bancking,
      title: "Элитный Планировщик",
      price: "300 500 ₸",
    },
    {
      id: 2,
      image: calendar,
      title: "Премиум Календарь",
      price: "250 500 ₸",
      beforePrice: "350 500 ₸",
    },
    { id: 3, image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
  ];

  // useEffect(() => {
  //   getCartProducts();
  // }, []);

  return (
    <>
      {isOpenCart && (
        <>
          <div
            className="cartWrapper"
            onClick={() => setIsOpenCart(false)}
          ></div>
          <div style={{ position: "relative" }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              style={{
                width: `calc(100% - ${isDesktop ? 600 : 0}px)`,
                marginLeft: isDesktop ? 600 : 0,
              }}
            ></AppBar>
            <Drawer
              variant={isDesktop ? "permanent" : "temporary"}
              anchor={isDesktop ? "right" : "bottom"}
              open={isOpenCart}
              onClose={() => setIsOpenCart(false)}
              PaperProps={{
                style: {
                  width: isDesktop ? 600 : "100%",
                  height: isDesktop ? "100%" : "88%",
                  display: "flex",
                  flexDirection: "column",
                  overflowY: "auto",
                },
              }}
            >
              <div className="cartContainer">
                <div className="cartTitle">
                  <div>
                    <h2>Ваша корзина</h2>
                    <p>3 приложения</p>
                  </div>
                  <img
                    src={closeImage}
                    alt="close"
                    className="closeImage"
                    onClick={() => setIsOpenCart(false)}
                  />
                </div>

                <div className="productsContent">
                  {choiceItems.map((el) => (
                    <div key={el.id} className="cartInfoContainer">
                      <img src={el.image} alt="app" className="cartImages" />
                      <div className="cartCardsContent">
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                        <p style={{ fontSize: "14px" }}>
                          Lorem ipsum dolor sit amet consectetur. Eget nec nam
                          eleifend lectus luctus eu aenean in. Tincidunt
                          vulputate porta tristique lectus felis ...Читать далее
                        </p>
                        <div className="priceDeleteContainer">
                          <div style={el.beforePrice && { display: "flex" }}>
                            <p
                              style={{
                                marginRight: "10px",
                                color: "gray",
                                textDecoration: "line-through",
                              }}
                            >
                              {el.beforePrice}
                            </p>
                            <p>{el.price}</p>
                          </div>
                          <span className="deleteCartProduct">Удалить</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="buyContainer">
                <div className="priceWrap">
                  <h3>Итоговая цена</h3>
                  <h3>1 220 400 ₸</h3>
                </div>
                <div className="buyBtnWrap">
                  <button>Совершить оплату</button>
                </div>
              </div>
            </Drawer>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
