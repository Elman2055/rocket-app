import Catalog from "../../components/catalog/Catalog";
import { useAppSelector } from "../../store";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CatalogContainer = () => {
  const [title, setTitle] = useState();
  const { id } = useParams();

  const {
    products: { products, categories },
  } = useAppSelector((state) => state);

  const getTitle = () => {
    const filteredTitle = products.filter((el) => el.id === Number(id));
    setTitle(filteredTitle[0].category);
  };

  useEffect(() => {
    getTitle();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return <Catalog items={categories} title={title} />;
};

export default CatalogContainer;
