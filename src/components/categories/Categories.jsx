import Carousel from "../ui/carousel/Carousel";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = ({ items, carouselItems }) => {
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

      <Carousel title={"Рекомендуемое для вас"} items={carouselItems} />
    </div>
  );
};

export default Categories;
