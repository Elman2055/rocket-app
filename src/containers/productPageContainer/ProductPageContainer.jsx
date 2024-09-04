import { useEffect, useState } from "react";
import ProductPage from "../../components/productPage/ProductPage";
import RocketApi from "../../services/rocketApi";
import Loader from "../../components/loader/Loader";
import { useParams } from "react-router-dom";

const ProductPageContainer = () => {
  const [product, setProduct] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [slider, setslider] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getProduct = async () => {
    setLoading(true);
    const response = await RocketApi.getProduct(Number(id));
    setProduct(response);

    const addProduct = response[0];
    const imagesArray = Object.keys(response[0])
      .filter((key) => key.startsWith("image_preview"))
      .map((key) => addProduct[key]);

    setslider(imagesArray);
    setLoading(false);
  };

  const getProducts = async () => {
    setLoading(true);
    const response = await RocketApi.getProducts("");
    setCarousel(response);
    setLoading(false);
  };

  const onSaveFavourites = async (id) => {
    setLoading(true);
    await RocketApi.getAddFavourites({ id });
    setLoading(false);
  };

  const onAddCartProduct = async (id) => {
    setLoading(true);
    await RocketApi.getAddCartProducts({ id });
    const cartUpdatedEvent = new CustomEvent("cartUpdated");
    window.dispatchEvent(cartUpdatedEvent);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
    getProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div>
      <Loader isOpen={loading} />
      <ProductPage
        items={carousel}
        product={product}
        slider={slider}
        onSaveFavourites={onSaveFavourites}
        onAddCartProduct={onAddCartProduct}
      />
    </div>
  );
};

export default ProductPageContainer;
