import React, { useState } from "react";
import { useAppSelector } from "../../store";
import banckingApp from "../../../public/banckingApp.png";
import calendarApp from "../../../public/calendarApp.png";
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

  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [images, setImages] = useState([banckingApp, calendarApp]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleDiscountClick = (value) => {
    setSelectedDiscount(value);
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

/*









        <div className="containerAddProduct">
      <div className="column">
        <p className="titleAdmin">Изображение</p>
        <div className="image-upload">
          <input
            type="file"
            id="file-input"
            className="file-input"
            onChange={handleFileChange}
            multiple
          />
          <label htmlFor="file-input" className="upload-btn">
            Загрузить
          </label>
        </div>
        <div className="image-preview">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Preview ${index + 1}`}
              className="preview-image"
            />
          ))}
        </div>
      </div>

      <div className="column">
        <div className="input-group">
          <p className="titleAdmin">Заголовок</p>
          <input type="text" id="title" className="input-field" />
        </div>
        <div className="input-group">
          <label htmlFor="price" className="titleAdmin">
            Цена
          </label>
          <input type="text" id="price" className="input-field" />
        </div>
        <div className="discount-group">
          <p className="titleAdmin">Скидка</p>
          <div className="discount-buttons">
            {[10, 15, 20, 25, 30, 35, 40, 45].map((discount) => (
              <button
                key={discount}
                className={`discount-btn ${
                  selectedDiscount === discount ? "active" : ""
                }`}
                onClick={() => handleDiscountClick(discount)}
              >
                {discount}%
              </button>
            ))}
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="description" className="titleAdmin">
            Описание
          </label>
          <textarea
            id="description"
            className="input-field description-field"
            rows={13}
          />
        </div>
        <button className="save-btn">Сохранить</button>
      </div>
    </div>
*/
