import closeImage from "../../../public/closeImage.png";
import bancking from "../../../public/banckingApp.png";
import calendar from "../../../public/calendarApp.png";
import fitnes from "../../../public/fitnesApp.png";
import { Drawer, CssBaseline, AppBar } from "@mui/material";
import "./Cart.css";

const Cart = ({ isOpenCart, setIsOpenCart }) => {
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

  return (
    <>
      {isOpenCart && (
        <>
          <div
            className="cartWrapper"
            onClick={() => setIsOpenCart(false)}
          ></div>
          <div>
            <CssBaseline />
            <AppBar
              position="fixed"
              style={{
                width: `calc(100% - ${600}px)`,
                marginLeft: 600,
              }}
            ></AppBar>
            <Drawer
              variant="permanent"
              style={{ width: 600, flexShrink: 0 }}
              PaperProps={{ style: { width: 600 } }}
              anchor="right"
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

                <div>
                  {choiceItems.map((el) => (
                    <div key={el.id} className="cartInfoContainer">
                      <img src={el.image} alt="app" className="cartImages" />
                      <div style={{ width: "370px" }}>
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
