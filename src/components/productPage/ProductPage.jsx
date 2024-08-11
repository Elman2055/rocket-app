import bancking from "../../../public/banckingApp.png";
import calendar from "../../../public/calendarApp.png";
import fitnes from "../../../public/fitnesApp.png";
import journey from "../../../public/journeyApp.png";
import arrow from "../../../public/arrow.png";
import rightOwnImage from "../../../public/rightOwnImage.png";
import Carousel from "../ui/carousel/Carousel";
import likeBtn from "../../../public/likeBtn.png";
import { useAppSelector } from "../../store";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import { useEffect, useState } from "react";

const ProductPage = ({ items }) => {
  const [addProduct, setAddProduct] = useState();

  const { id } = useParams();

  const {
    products: { products },
  } = useAppSelector((state) => state);

  const getFilteredProduct = () => {
    const filteredProduct = products.filter((el) => el.id === Number(id));
    setAddProduct(filteredProduct);
  };

  useEffect(() => {
    getFilteredProduct();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div className="productContainer">
      <div className="productInfo">
        <div className="productImageContainer">
          <div className="smallimages">
            <img src={bancking} alt="bancking" />
            <img src={calendar} alt="calendar" />
            <img src={fitnes} alt="fitnes" />
            <img src={journey} alt="journey" />
          </div>
          {addProduct &&
            addProduct.map((el) => (
              <img
                key={el.id}
                src={el.image}
                alt="product"
                className="productImage"
              />
            ))}
        </div>
        <div className="productTitleContainer">
          {addProduct &&
            addProduct
              .filter((el) => el.beforePrice)
              .map((el) => (
                <div key={el.id} className="saleProductNow">
                  <p className="saleDetalid">распродажа</p>
                  <p className="saleDetalid saleDetalidPrice">-20%</p>
                </div>
              ))}
          {addProduct &&
            addProduct.map((el) => (
              <div key={el.id} style={{ marginBottom: "50px" }}>
                <h2 style={{ marginBottom: "20px" }}>{el.title}</h2>
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
              </div>
            ))}
          <button className="buyNow">Купить сейчас</button>
          <div className="downProductBtns">
            <button className="productBtn">Добавить в корзину</button>
            <button className="productBtn likeProduct">
              <img src={likeBtn} alt="like" />
            </button>
          </div>
          <p className="downTitleText">
            Lorem ipsum dolor sit amet consectetur. Eget nec nam eleifend lectus
            luctus eu aenean in. Tincidunt vulputate porta tristique lectus
            felis in nec eu erat. Purus turpis nisi tortor vehicula elementum
            curabitur in amet imperdiet. Viverra potenti massa est id auctor
            dui. Arcu convallis velit consectetur lectus. ...Читать далее
          </p>
          <hr />
          <div className="questionInfo">
            <h3>Как это работает?</h3>
            <img
              src={arrow}
              alt="arrow"
              style={{ height: "8px", width: "15px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <div className="ownBlock ownProduct">
        <img src={rightOwnImage} alt="rightOwnImage" className="ownImage" />
        <div
          style={{ width: "50%", display: "flex", justifyContent: "center" }}
        >
          <div className="ownTitle">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis ridiculus fringilla
              vel sem nisi nunc fermentum risus. Posuere id in imperdiet odio
              sagittis eget est. Arcu tellus diam a morbi. Ut etiam non ornare
              lorem consectetur ipsum.
            </p>
            <button className="ownBtn">Подробнее</button>
          </div>
        </div>
      </div>

      <div style={{ margin: "50px 0px 50px 0px" }}>
        <Carousel items={items} title="Похожее что вы искали" />
      </div>
    </div>
  );
};

export default ProductPage;
