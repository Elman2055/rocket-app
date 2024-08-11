import RunningLine from "../ui/runningLine/RunningLine";
import bancking from "../../../public/banckingApp.png";
import choiceLike from "../../../public/choiceLike.png";
import firstHint from "../../../public/firstHint.png";
import Carousel from "../ui/carousel/Carousel";
import "./MainPage.css";

const MainPage = () => {
  const carousel = [
    { image: bancking, title: "Путешественник Элит", price: "500 200 ₸" },
    { image: bancking, title: "Путешественник Элит", price: "500 200 ₸" },
    { image: bancking, title: "Путешественник Элит", price: "500 200 ₸" },
    { image: bancking, title: "Путешественник Элит", price: "500 200 ₸" },
    { image: bancking, title: "Путешественник Элит", price: "500 200 ₸" },
    { image: bancking, title: "Путешественник Элит", price: "500 200 ₸" },
  ];

  return (
    <div>
      <div className="background">
        <p>Ваши любимые приложения здесь</p>
        <div className="mainBackgroundBtns">
          <button>Утилиты</button>
          <button className="playBtnBackground">Игры</button>
        </div>
      </div>
      <RunningLine />
      <div className="mainPageContainer">
        <div className="mainText">
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis ridiculus fringilla vel
            sem nisi nunc fermentum risus. Posuere id in imperdiet odio sagittis
            eget est. Arcu tellus diam a morbi. Ut etiam non ornare lorem
            consectetur ipsum.
          </p>
        </div>
        <p className="choiceTitle">Отличный выбор для всех</p>
        <div className="choiceApp">
          <div className="definiteApp">
            <img src={bancking} alt="bancking" className="appBackground" />
            <img src={choiceLike} alt="choiceLike" className="choiceLike" />
            <button className="basketBtn">Добавить в корзину</button>
            <h4>Элитный планировщик</h4>
            <p>300 500 ₸</p>
          </div>
          <div className="definiteApp">
            <img src={bancking} alt="bancking" className="appBackground" />
            <img src={choiceLike} alt="choiceLike" className="choiceLike" />
            <button className="basketBtn">Добавить в корзину</button>
            <h4>Элитный планировщик</h4>
            <p>300 500 ₸</p>
          </div>
          <div className="definiteApp">
            <img src={bancking} alt="bancking" className="appBackground" />
            <img src={choiceLike} alt="choiceLike" className="choiceLike" />
            <button className="basketBtn">Добавить в корзину</button>
            <h4>Элитный планировщик</h4>
            <p>300 500 ₸</p>
          </div>
          <div className="definiteApp">
            <img src={bancking} alt="bancking" className="appBackground" />
            <img src={choiceLike} alt="choiceLike" className="choiceLike" />
            <button className="basketBtn">Добавить в корзину</button>
            <h4>Элитный планировщик</h4>
            <p>300 500 ₸</p>
          </div>
        </div>
        <div className="searchAll">
          <button className="searchAppBtn">Смотреть все</button>
        </div>
      </div>
      <div className="centeredText">
        <h4>
          Lorem ipsum dolor sit amet consectetur. Quis ridiculus fringilla vel
          sem nisi nunc fermentum risus. Posuere id in imperdiet odio sagittis
          eget est
        </h4>
      </div>
      <div className="mainPageContainer">
        <h2>Приложение, которое стоит попробовать</h2>

        <div className="hint">
          <div>
            <img src={firstHint} alt="" className="hintImage" />
            <p>Образование &#8594;</p>
          </div>
          <div>
            <img src={firstHint} alt="" className="hintImage" />
            <p>Образование &#8594;</p>
          </div>
          <div>
            <img src={firstHint} alt="" className="hintImage" />
            <p>Образование &#8594;</p>
          </div>
        </div>

        <Carousel items={carousel} />
      </div>
    </div>
  );
};

export default MainPage;
