import Carousel from "../ui/carousel/Carousel";
import { Link } from "react-router-dom";
import useDesktop from "../hooks/useDesktop";
import "./Categories.css";

const Categories = ({ items, carouselItems }) => {
  const isDesktop = useDesktop();

  return (
    <div className="categoriesContainer">
      <h2>Категории приложений</h2>
      <div className="categoryWrap">
        {items.map((el) => (
          <Link
            key={el.id}
            to={`/catalog/${el.id}`}
            style={{ textDecoration: "none", cursor: "pointer" }}
            className="categoryList"
          >
            <img src={el.image} alt="categoties" className="categoryImage" />
            <h3 className="categoryTitle">{el.category}</h3>
            <button className="infoProductBtn">Посмотреть товары</button>
          </Link>
        ))}
      </div>
      <div className="infoProductsCat">
        <div className="kidProduct">
          <div className="productCards">
            <h3>Товары для детей</h3>
            <p>
              Все необходимое для детей всех возрастов: игрушки, одежда,
              образовательные приложения и развивающие игры
            </p>
            <button>Посмотреть товары</button>
          </div>
        </div>

        <div className="marketProduct">
          <div className="productCards">
            <h3>Продукты питания и напитки</h3>
            <p>
              Лучшие приложения для любителей вкусной и здоровой пищи: рецепты,
              планировщики питания и советы по приготовлению блюд
            </p>
            <button>Посмотреть товары</button>
          </div>
        </div>
      </div>

      {isDesktop ? (
        <Carousel title={"Рекомендуемое для вас"} items={carouselItems} />
      ) : (
        <>
          {" "}
          <h2 style={{ fontSize: "19px" }}>Рекомендуемое для вас</h2>
          <div className="choiceApp" style={{marginBottom: "50px"}}>
            {carouselItems.map((el) => (
              <Link
                key={el.id}
                to={`/product/${el.id}`}
                className="definiteApp"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <img src={el.image} alt="App" className="appBackground" />
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
                <button className="addBasketMobile">Добавить в корзину</button>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Categories;
