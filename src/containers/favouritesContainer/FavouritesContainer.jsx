import { useEffect, useState } from "react";
import Favourites from "../../components/favourites/Favourites";
import RocketApi from "../../services/rocketApi";
import Loader from "../../components/loader/Loader";
import { useAppSelector } from "../../store";

const FavouritesContainer = () => {
  const {
    products: { products },
  } = useAppSelector((state) => state);
  const [loading, setLoading] = useState(false);

  const getFavouritesProducts = async () => {
    setLoading(true);
    const response = await RocketApi.getFavourites();
    console.log(response);
    setLoading(false);
  };

  useEffect(() => {
    getFavouritesProducts();
  }, []);

  const filteredProducts = products.filter((el) => el.id !== 9 && el.id !== 10);

  return (
    <>
      <Loader isOpen={loading} />
      <Favourites items={filteredProducts} />
    </>
  );
};

export default FavouritesContainer;
