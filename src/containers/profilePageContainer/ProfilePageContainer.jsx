import bancking from "../../../public/banckingApp.png";
import calendar from "../../../public/calendarApp.png";
import fitnes from "../../../public/fitnesApp.png";
import journey from "../../../public/journeyApp.png";
import ProfilePage from "../../components/profilePage/ProfilePage";

const ProfilePageContainer = () => {
  const items = [
    {
      id: 1,
      image: bancking,
      title: "Элитный Планировщик",
      price: "300 500 ₸",
    },
    {
      id: 2,
      image: calendar,
      title: "Премиум Календарь",
      price: "250 500 ₸",
      beforePrice: "350 500 ₸",
    },
    { id: 3, image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
    {
      id: 4,
      image: journey,
      title: "Путешественник Элит",
      price: "500 200 ₸",
      beforePrice: "620 500 ₸",
    },
  ];

  return (
    <div>
      <ProfilePage items={items} />
    </div>
  );
};

export default ProfilePageContainer;
