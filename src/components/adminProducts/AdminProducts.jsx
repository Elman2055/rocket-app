import React from "react";
import "./AdminProducts.css";

const AdminProducts = ({
  activeCategory,
  categories,
  products,
  showProductForm,
  selectedProduct,
  selectedDiscount,
  images,
  onCategoryClick,
  onFileChange,
  onDiscountClick,
  onAddProductClick,
  onProductClick,
}) => {
  if (showProductForm) {
    return (
      <div className="containerAddProduct">
        <div className="column">
          <p className="titleAdmin">Изображение</p>
          <div className="image-upload">
            <input
              type="file"
              id="file-input"
              className="file-input"
              onChange={onFileChange}
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
            <input
              type="text"
              id="title"
              className="input-field"
              defaultValue={selectedProduct ? selectedProduct.title : ""}
            />
          </div>
          <div className="input-group">
            <label htmlFor="price" className="titleAdmin">
              Цена
            </label>
            <input
              type="text"
              id="price"
              className="input-field"
              defaultValue={selectedProduct ? selectedProduct.price : ""}
            />
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
                  onClick={() => onDiscountClick(discount)}
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
              defaultValue={
                selectedProduct
                  ? "Lorem ipsum dolor sit amet consectetur. Dui mauris leo sit morbi. Morbi massa eget fames viverra. Ante parturientlaoreet eu eget condimentum feugiat. Vivamus risus donec nuncfermentum egestas tellus."
                  : ""
              }
            />
          </div>
          <button className="save-btn">Сохранить</button>
        </div>
      </div>
    );
  }

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
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="products">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => onProductClick(product)}
          >
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
      <button className="addProductAdmin" onClick={onAddProductClick}>
        Добавить товар
      </button>
    </div>
  );
};

export default AdminProducts;
