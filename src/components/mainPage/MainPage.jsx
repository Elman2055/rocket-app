import RunningLine from "../ui/runningLine/RunningLine";
import bancking from "../../../public/banckingApp.png";
import "./MainPage.css";

const MainPage = () => {
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
            <img src={bancking} alt="bancking" />
            <button className="basketBtn">Добавить в корзину</button>
            <h4>Элитный планировщик</h4>
            <p>300 500 ₸</p>
          </div>
          <div className="definiteApp">
            <img src={bancking} alt="bancking" />
            <button className="basketBtn">Добавить в корзину</button>
            <h4>Элитный планировщик</h4>
            <p>300 500 ₸</p>
          </div>
          <div className="definiteApp">
            <img src={bancking} alt="bancking" />
            <button className="basketBtn">Добавить в корзину</button>
            <h4>Элитный планировщик</h4>
            <p>300 500 ₸</p>
          </div>
          <div className="definiteApp">
            <img src={bancking} alt="bancking" />
            <button className="basketBtn">Добавить в корзину</button>
            <h4>Элитный планировщик</h4>
            <p>300 500 ₸</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
