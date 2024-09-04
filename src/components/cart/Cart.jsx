import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import useDesktop from "../hooks/useDesktop";
import closeImage from "../../../public/closeImage.png";
import Loader from "../loader/Loader";
import RocketApi from "../../services/rocketApi";
import "./Cart.css";

const Cart = ({ isOpenCart, setIsOpenCart }) => {
  const isDesktop = useDesktop();
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const calculateTotalPrice = (products) => {
    const total = products.reduce(
      (sum, product) => sum + parseFloat(product.price),
      0
    );
    setTotalPrice(total);
  };

  const getCartProducts = async () => {
    setLoading(true);
    const response = await RocketApi.getCartProducts();
    setCartProducts(response.items);
    if (response.items) calculateTotalPrice(response.items);
    setLoading(false);
  };

  const getDeleteCartProduct = async (id) => {
    setLoading(true);
    await RocketApi.getDeleteCartProduct({ id });
    getCartProducts();
    setLoading(false);
  };

  const handleCartUpdated = () => {
    getCartProducts();
  };

  useEffect(() => {
    getCartProducts();

    window.addEventListener("cartUpdated", handleCartUpdated);
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);

  return (
    <>
      {isOpenCart && (
        <>
          <Loader isOpen={loading} />
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
                    {cartProducts && <p>{cartProducts.length} приложения</p>}
                  </div>
                  <img
                    src={closeImage}
                    alt="close"
                    className="closeImage"
                    onClick={() => setIsOpenCart(false)}
                  />
                </div>

                <div className="productsContent">
                  {cartProducts ? (
                    <>
                      {" "}
                      {cartProducts.map((el) => (
                        <div key={el.product_id} className="cartInfoContainer">
                          <img
                            src={`https://approcket.kz/api/products/previewImage/${el.image_preview_one}`}
                            alt="app"
                            className="cartImages"
                          />
                          <div className="cartCardsContent">
                            <h3>{el.title}</h3>
                            <p style={{ fontSize: "14px" }}>{el.description}</p>
                            <div className="priceDeleteContainer">
                              <div style={el.old_price && { display: "flex" }}>
                                {el.old_price && (
                                  <p
                                    style={{
                                      marginRight: "10px",
                                      color: "gray",
                                      textDecoration: "line-through",
                                    }}
                                  >
                                    {el.old_price}₸
                                  </p>
                                )}
                                <p>{el.price}₸</p>
                              </div>
                              <span
                                className="deleteCartProduct"
                                onClick={() =>
                                  getDeleteCartProduct(el.product_id)
                                }
                              >
                                Удалить
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}{" "}
                    </>
                  ) : (
                    <>
                      <h2>Товаров в корзине нет</h2>
                    </>
                  )}
                </div>
              </div>

              {cartProducts && (
                <div className="buyContainer">
                  <div className="priceWrap">
                    <h3>Итоговая цена</h3>
                    <h3>{totalPrice} ₸</h3>
                  </div>
                  <div className="buyBtnWrap">
                    <button>Совершить оплату</button>
                  </div>
                </div>
              )}
            </Drawer>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
