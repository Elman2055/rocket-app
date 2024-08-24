import React, { useState } from "react";
import { useAppSelector } from "../../store";
import AdminProducts from "../../components/adminProducts/AdminProducts";
import banckingApp from "../../../public/banckingApp.png";
import calendarApp from "../../../public/calendarApp.png";

const AdminProductsContainer = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [images, setImages] = useState([banckingApp, calendarApp]);

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

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleDiscountClick = (value) => {
    setSelectedDiscount(value);
  };

  const handleAddProductClick = () => {
    setShowProductForm(true);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setShowProductForm(true);
    setSelectedProduct(product);
    setSelectedDiscount(product.beforPrice ? 10 : null);
  };

  return (
    <AdminProducts
      activeCategory={activeCategory}
      categories={categories}
      products={products}
      showProductForm={showProductForm}
      selectedProduct={selectedProduct}
      selectedDiscount={selectedDiscount}
      images={images}
      onCategoryClick={handleCategoryClick}
      onFileChange={handleFileChange}
      onDiscountClick={handleDiscountClick}
      onAddProductClick={handleAddProductClick}
      onProductClick={handleProductClick}
    />
  );
};

export default AdminProductsContainer;
