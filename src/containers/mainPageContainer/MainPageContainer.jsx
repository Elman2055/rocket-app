import RocketApi from "../../services/rocketApi";
import MainPage from "../../components/mainPage/MainPage";
import Loader from "../../components/loader/Loader";
import { useEffect, useState } from "react";

const MainPageContainer = () => {
  const [excellent, setExcellent] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [firstInfoBlock, setFirstInfoBlock] = useState([]);
  const [secondInfoBlock, setSecondInfodBlock] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const response = await RocketApi.getProducts("");
    setExcellent(response.slice(-4));
    setRecommendation(response.slice(0, 3));
    setCarousel(response);
    setFirstInfoBlock(response.slice(3, 4));
    setSecondInfodBlock(response.slice(4, 5));
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
    getProducts();
  }, []);

  return (
    <div>
      <Loader isOpen={loading} />
      <MainPage
        choiceItems={excellent}
        carouseItems={carousel}
        hintItems={recommendation}
        firstInfoBlock={firstInfoBlock}
        secondInfoBlock={secondInfoBlock}
        onSaveFavourites={onSaveFavourites}
        onAddCartProduct={onAddCartProduct}
      />
    </div>
  );
};

export default MainPageContainer;
