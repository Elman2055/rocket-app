import bancking from "../../../public/banckingApp.png";
import calendar from "../../../public/calendarApp.png";
import fitnes from "../../../public/fitnesApp.png";
import journey from "../../../public/journeyApp.png";
import arrow from "../../../public/arrow.png";
import rightOwnImage from "../../../public/rightOwnImage.png";
import Carousel from "../ui/carousel/Carousel";
import { useAppSelector } from "../../store";
import "./ProductPage.css";

const ProductPage = ({ items }) => {
  const {
    products: { products },
  } = useAppSelector((state) => state);

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
          <img src={calendar} alt="product" className="productImage" />
        </div>
        <div className="productTitleContainer">
          <h2 style={{ marginBottom: "20px" }}>
            Элитный Планировщик: ваш персональный <br /> ассистент для
            идеального порядка
          </h2>
          <p style={{ marginBottom: "50px" }}>123 909 T</p>

          <button className="buyNow">Купить сейчас</button>
          <div className="downProductBtns">
            <button className="productBtn">Добавить в корзину</button>
            <button className="productBtn likeProduct">Like</button>
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
              style={{ height: "7px", width: "15px" }}
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
