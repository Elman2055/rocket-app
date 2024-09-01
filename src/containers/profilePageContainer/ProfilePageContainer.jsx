import bancking from "../../../public/banckingApp.png";
import calendar from "../../../public/calendarApp.png";
import fitnes from "../../../public/fitnesApp.png";
import journey from "../../../public/journeyApp.png";
import ProfilePage from "../../components/profilePage/ProfilePage";
import { useAuth } from "../../components/authContext/AuthContext";
import { useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import RocketApi from "../../services/rocketApi";

const ProfilePageContainer = () => {
  const { userData, logout } = useAuth();

  const [name, setName] = useState(userData.name);
  const [lastName, setLastName] = useState(userData.surname);
  const [phone, setPhone] = useState(userData.phone_number);
  const [email, setEmail] = useState(userData.email);
  const [errors, setErrors] = useState({});
  const [isActive, setIsActive] = useState();
  const [isModal, setIsModal] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    products: { isEdit },
  } = useAppSelector((state) => state);

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

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Имя не может быть пустым";
    if (!lastName) newErrors.lastName = "Фамилия не может быть пустой";
    if (!email) {
      newErrors.email = "Почта не может быть пустой";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Неправильный формат почты";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (validateForm()) {
      setLoading(true);
      const response = await RocketApi.getEditProfile({
        name,
        lastName,
        email,
        phone,
      });
      console.log(response);

      setLoading(false);
    } else {
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    if (isEdit) {
      setName(userData.name);
      setLastName(userData.surname);
      setPhone(userData.phone_number);
      setEmail(userData.email);
    }
  }, [isEdit, userData]);

  useEffect(() => {
    isEdit ? setIsActive(0) : setIsActive(1);
  }, [isEdit]);

  return (
    <div>
      <Loader isOpen={loading} />
      <ProfilePage
        items={items}
        handleSave={handleSave}
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        errors={errors}
        isEdit={isEdit}
        isActive={isActive}
        setIsActive={setIsActive}
        isModal={isModal}
        setIsModal={setIsModal}
        mobileActiveIndex={mobileActiveIndex}
        setMobileActiveIndex={setMobileActiveIndex}
        logout={logout}
      />
    </div>
  );
};

export default ProfilePageContainer;
