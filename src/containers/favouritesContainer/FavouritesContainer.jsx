import Favourites from "../../components/favourites/Favourites";
import { useAppSelector } from "../../store";

const FavouritesContainer = () => {
  const {
    products: { products },
  } = useAppSelector((state) => state);

  const filteredProducts = products.filter((el) => el.id !== 9 && el.id !== 10);

  return <Favourites items={filteredProducts} />;
};

export default FavouritesContainer;
