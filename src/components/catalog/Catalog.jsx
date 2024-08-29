import { Link } from "react-router-dom";
import useDesktop from "../hooks/useDesktop";
import "./Catalog.css";

const Catalog = ({ items, title }) => {
  const isDesktop = useDesktop();

  return (
    <div className="catlogContainer">
      <h2 style={{ margin: "60px 0px 10px 0px" }}>{title}</h2>
      <p style={{ width: `${isDesktop ? "530px" : "auto"}` }}>
        Lorem ipsum dolor sit amet consectetur. Quis ridiculus fringilla vel sem
        nisi nunc fermentum risus. Posuere id in imperdiet odio sagittis eget
        est
      </p>
      <div className="catalogInfo">
        {items.length > 0 &&
          items.map((el) => (
            <Link
              key={el.product_id}
              to={`/product/${el.product_id}`}
              className="catalogCards"
            >
              <div>
                <img
                  src={`https://approcket.kz/api/products/previewImage/${el.image_preview_one}`}
                  alt="app"
                  className="catalogImage"
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
                      {`${el.old_price} ₸`}
                    </p>
                  )}
                  <p>{el.price} ₸</p>
                </div>
              </div>
              {!isDesktop && (
                <button className="addBasketCategor">Добавить в корзину</button>
              )}
            </Link>
          ))}
      </div>
      <div className="lazyLoadBtn">
        <button>Загрузить больше</button>
      </div>
    </div>
  );
};

export default Catalog;
