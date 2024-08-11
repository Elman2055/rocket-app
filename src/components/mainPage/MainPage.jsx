import RunningLine from "../ui/runningLine/RunningLine";
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
    </div>
  );
};

export default MainPage;
