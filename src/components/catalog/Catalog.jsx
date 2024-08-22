import { Link } from "react-router-dom";
import "./Catalog.css";

const Catalog = ({ items, title }) => {
  return (
    <div className="catlogContainer">
      <h2 style={{ margin: "60px 0px 10px 0px" }}>{title}</h2>
      <p style={{ width: "530px" }}>
        Lorem ipsum dolor sit amet consectetur. Quis ridiculus fringilla vel sem
        nisi nunc fermentum risus. Posuere id in imperdiet odio sagittis eget
        est
      </p>
      <div className="catalogInfo">
        {items.map((el) => (
          <Link to={`/product/${el.id}`} className="catalogCards">
            <img src={el.image} alt="app" className="catalogImage" />
            <h4>{el.title}</h4>
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
