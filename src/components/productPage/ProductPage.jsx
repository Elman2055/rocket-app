import arrow from "../../../public/arrow.png";
import rightOwnImage from "../../../public/rightOwnImage.png";
import Carousel from "../ui/carousel/Carousel";
import likeBtn from "../../../public/likeBtn.png";
import SliderComponent from "../mobileSlider/MobileSlider";
import useDesktop from "../hooks/useDesktop";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ProductPage.css";

const ProductPage = ({
  items,
  product,
  slider,
  onSaveFavourites,
  onAddCartProduct,
}) => {
  const [imageLink, setImageLink] = useState(
    "https://approcket.kz/api/products/previewImage/"
  );
  const isDesktop = useDesktop();

  return (
    <div className="productContainer">
      <div className="productInfo">
        <div className="productImageContainer">
          {isDesktop ? (
            <>
              {product.length > 0 &&
                product.map((el) => (
                  <div key={el.product_id} style={{ display: "flex" }}>
                    <div className="smallimages">
                      <img
                        src={`${imageLink}${el.image_preview_two}`}
                        alt="bancking"
                      />
                      <img
                        src={`${imageLink}${el.image_preview_three}`}
                        alt="calendar"
                      />
                      <img
                        src={`${imageLink}${el.image_preview_four}`}
                        alt="fitnes"
                      />
                      <img
                        src={`${imageLink}${el.image_preview_five}`}
                        alt="journey"
                      />
                    </div>
                    <img
                      key={el.product_id}
                      src={`${imageLink}${el.image_preview_one}`}
                      alt="product"
                      className="productImage"
                    />
                  </div>
                ))}
            </>
          ) : (
            <>{slider.length > 0 && <SliderComponent images={slider} />}</>
          )}
        </div>
        <div className="productTitleContainer">
          {product &&
            product
              .filter((el) => el.old_price)
              .map((el) => (
                <div key={el.product_id} className="saleProductNow">
                  <p className="saleDetalid">распродажа</p>
                  <p className="saleDetalid saleDetalidPrice">-20%</p>
                </div>
              ))}
          {product &&
            product.map((el) => (
              <>
                <div key={el.product_id} style={{ marginBottom: "50px" }}>
                  <h2 style={{ marginBottom: "20px" }}>{el.title}</h2>
                  <div style={el.old_price && { display: "flex" }}>
                    {el.old_price && (
                      <p
                        style={{
                          marginRight: "10px",
                          color: "gray",
                          textDecoration: "line-through",
                        }}
                      >
                        {`${el.old_price}₸`}
                      </p>
                    )}
                    <p>{`${el.price} ₸`}</p>
                  </div>
                </div>
                <button className="buyNow">Купить сейчас</button>
                <div className="downProductBtns">
                  <button
                    className="productBtn"
                    onClick={() => onAddCartProduct(el.product_id)}
                  >
                    Добавить в корзину
                  </button>
                  <button
                    className="productBtn likeProduct"
                    onClick={() => onSaveFavourites(el.product_id)}
                  >
                    <img src={likeBtn} alt="like" />
                  </button>
                </div>
              </>
            ))}
          {product.map((el) => (
            <p key={el.product_id} className="downTitleText">
              {el.description}
            </p>
          ))}
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
        <img
          src={rightOwnImage}
          alt="rightOwnImage"
          className="ownImageProduct"
        />
        <div
          style={{
            width: `${isDesktop ? "50%" : "auto"}`,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="ownTitleProduct">
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

      {isDesktop ? (
        <>
          {" "}
          <div style={{ margin: "50px 0px 50px 0px" }}>
            {items.length > 0 && (
              <Carousel items={items} title="Похожее что вы искали" />
            )}
          </div>
        </>
      ) : (
        <>
          <div style={{ width: "90%", margin: "0 auto" }}>
            <h2 style={{ fontSize: "19px" }}>Похожее что вы искали</h2>
            <div className="choiceApp" style={{ margin: "20px 0px 50px 0px" }}>
              {items.length > 0 &&
                items.map((el) => (
                  <Link
                    key={el.product_id}
                    to={`/product/${el.product_id}`}
                    className="definiteApp"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={`${imageLink}${el.image_preview_one}`}
                      alt="App"
                      className="appBackground"
                    />
                    <h4>{el.title}</h4>
                    <div style={el.old_price && { display: "flex" }}>
                      {el.old_price && (
                        <p
                          style={{
                            marginRight: "10px",
                            color: "gray",
                            textDecoration: "line-through",
                          }}
                        >
                          {`${el.old_price}₸`}
                        </p>
                      )}
                      <p>{el.price}</p>
                    </div>
                    <button
                      className="addBasketMobile"
                      onClick={() => onAddCartProduct(el.product_id)}
                    >
                      Добавить в корзину
                    </button>
                  </Link>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
