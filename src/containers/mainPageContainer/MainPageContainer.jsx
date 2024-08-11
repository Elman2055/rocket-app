import bancking from "../../../public/banckingApp.png";
import calendar from "../../../public/calendarApp.png";
import fitnes from "../../../public/fitnesApp.png";
import journey from "../../../public/journeyApp.png";
import firstHint from "../../../public/firstHint.png";
import secondHint from "../../../public/secondHint.png";
import thirdHint from "../../../public/thirdHint.png";
import MainPage from "../../components/mainPage/mainPage";

const MainPageContainer = () => {
  const choiceItems = [
    { image: bancking, title: "Элитный Планировщик", price: "300 500 ₸" },
    {
      image: calendar,
      title: "Премиум Календарь",
      price: "250 500 ₸",
      beforePrice: "350 500 ₸",
    },
    { image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
    {
      image: journey,
      title: "Путешественник Элит",
      price: "500 200 ₸",
      beforePrice: "620 500 ₸",
    },
  ];

  const carousel = [
    { image: journey, title: "Путешественник Элит", price: "500 200 ₸" },
    { image: calendar, title: "Премиум Календарь", price: "250 500 ₸" },
    { image: bancking, title: "Элитный Планировщик", price: "300 500 ₸" },
    { image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
    { image: journey, title: "Путешественник Элит", price: "500 200 ₸" },
    { image: calendar, title: "Премиум Календарь", price: "250 500 ₸" },
    { image: bancking, title: "Элитный Планировщик", price: "300 500 ₸" },
    { image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
    { image: journey, title: "Путешественник Элит", price: "500 200 ₸" },
    { image: calendar, title: "Премиум Календарь", price: "250 500 ₸" },
    { image: bancking, title: "Элитный Планировщик", price: "300 500 ₸" },
    { image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
  ];

  const hintItems = [
    { image: firstHint, title: "Образование" },
    { image: secondHint, title: "Здоровье и Фитнес" },
    { image: thirdHint, title: "Финансы" },
  ];

  return (
    <div>
      <MainPage
        choiceItems={choiceItems}
        carouseItems={carousel}
        hintItems={hintItems}
      />
    </div>
  );
};

export default MainPageContainer;
