import { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import Loader from "../../components/loader/Loader";
import RocketApi from "../../services/rocketApi";

const CategoriesContainer = () => {
  const [products, setProducts] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const response = await RocketApi.getProducts("");
    setProducts(response);
    setCarousel(response);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Loader isOpen={loading} />
      <Categories items={products} carouselItems={carousel} />
    </>
  );
};

export default CategoriesContainer;
