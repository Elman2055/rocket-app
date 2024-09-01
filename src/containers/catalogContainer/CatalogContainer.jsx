import Catalog from "../../components/catalog/Catalog";
import Loader from "../../components/loader/Loader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RocketApi from "../../services/rocketApi";

const CatalogContainer = () => {
  const [title, setTitle] = useState();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getCategoryProducts = async () => {
    setLoading(true);
    const response = await RocketApi.getProducts(id === "all" ? "" : id);
    setTitle(id === "all" ? "" : response[0].category);
    setProducts(response);
    setLoading(false);
  };

  useEffect(() => {
    getCategoryProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Loader isOpen={loading} />
      <Catalog items={products} title={title} />
    </>
  );
};

export default CatalogContainer;
