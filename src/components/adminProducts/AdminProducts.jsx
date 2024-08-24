import React, { useState } from "react";
import { useAppSelector } from "../../store";
import "./AdminProducts.css";

const AdminProducts = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const {
    products: { products },
  } = useAppSelector((state) => state);

  const categories = [
    "Все",
    "Корпаративные",
    "Технологичные",
    "Креативные",
    "Еда",
    "Мода",
    "Образование",
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="categoriesContainerAdmin">
      <h2 style={{ marginTop: "40px" }}>По категориям</h2>
      <div className="categoriesAdminProd">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              style={{ height: "70%" }}
            />
            <div className="product-info">
              <div className="product-title">
                <h4 style={{ width: "80px" }}>{product.title}</h4>
              </div>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
