import bancking from "../../public/banckingApp.png";
import calendar from "../../public/calendarApp.png";
import fitnes from "../../public/fitnesApp.png";
import journey from "../../public/journeyApp.png";
import firstHint from "../../public/firstHint.png";
import secondHint from "../../public/secondHint.png";
import thirdHint from "../../public/thirdHint.png";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
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
    { id: 5, image: firstHint, title: "Образование", price: "340 000 ₸" },
    {
      id: 6,
      image: secondHint,
      title: "Здоровье и Фитнес",
      price: "410 000 ₸",
    },
    { id: 7, image: thirdHint, title: "Финансы", price: "270 000 ₸" },
  ],
  
  carousel: [
    { id: 4, image: journey, title: "Путешественник Элит", price: "500 200 ₸" },
    { id: 2, image: calendar, title: "Премиум Календарь", price: "250 500 ₸" },
    {
      id: 1,
      image: bancking,
      title: "Элитный Планировщик",
      price: "300 500 ₸",
    },
    { id: 3, image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
    { id: 4, image: journey, title: "Путешественник Элит", price: "500 200 ₸" },
    { id: 2, image: calendar, title: "Премиум Календарь", price: "250 500 ₸" },
    {
      id: 1,
      image: bancking,
      title: "Элитный Планировщик",
      price: "300 500 ₸",
    },
    { id: 3, image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
    { id: 4, image: journey, title: "Путешественник Элит", price: "500 200 ₸" },
    { id: 2, image: calendar, title: "Премиум Календарь", price: "250 500 ₸" },
    {
      id: 1,
      image: bancking,
      title: "Элитный Планировщик",
      price: "300 500 ₸",
    },
    { id: 3, image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
