import Categories from "../../components/categories/Categories";
import { useAppSelector } from "../../store";

const CategoriesContainer = () => {
  const {
    products: { products, carousel },
  } = useAppSelector((state) => state);

  return <Categories items={products} carouselItems={carousel} />;
};

export default CategoriesContainer;
