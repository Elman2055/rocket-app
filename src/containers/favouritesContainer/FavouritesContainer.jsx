import { useEffect, useState } from "react";
import Favourites from "../../components/favourites/Favourites";
import RocketApi from "../../services/rocketApi";
import Loader from "../../components/loader/Loader";

const FavouritesContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFavouritesProducts = async () => {
    setLoading(true);
    const response = await RocketApi.getFavourites();
    setProducts(response.items);
    console.log(response.items);
    setLoading(false);
  };

  const onDeleteFavourites = async (id) => {
    setLoading(true);
    await RocketApi.getAddFavourites({ id });
    getFavouritesProducts();
    setLoading(false);
  };

  const onAddCartProduct = async (id) => {
    setLoading(true);
    await RocketApi.getAddCartProducts({ id });
    setLoading(false);
  };

  useEffect(() => {
    getFavouritesProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Loader isOpen={loading} />
      <Favourites
        items={products}
        onDeleteFavourites={onDeleteFavourites}
        onAddCartProduct={onAddCartProduct}
      />
    </>
  );
};

export default FavouritesContainer;
