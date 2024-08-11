import ProductPage from "../../components/productPage/ProductPage";
import { useAppSelector } from "../../store";
import "./ProductPageContainer.css";

const ProductPageContainer = () => {
  const {
    products: { carousel },
  } = useAppSelector((state) => state);

  return (
    <div>
      <ProductPage items={carousel} />
    </div>
  );
};

export default ProductPageContainer;
