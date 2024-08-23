import bancking from "../../public/banckingApp.png";
import calendar from "../../public/calendarApp.png";
import fitnes from "../../public/fitnesApp.png";
import journey from "../../public/journeyApp.png";
import firstHint from "../../public/firstHint.png";
import secondHint from "../../public/secondHint.png";
import thirdHint from "../../public/thirdHint.png";
import clothify from "../../public/clothify.png";
import spaJourney from "../../public/spaJourney.png";
import leftOwnImage from "../../public/leftOwnImage.png";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      image: bancking,
      title: "Элитный Планировщик",
      category: "Здоровье",
      price: "300 500 ₸",
    },
    {
      id: 2,
      image: calendar,
      title: "Премиум Календарь",
      category: "Образование",
      price: "250 500 ₸",
      beforePrice: "350 500 ₸",
    },
    {
      id: 3,
      image: fitnes,
      title: "Фитнес Профи",
      category: "Игры",
      price: "400 500 ₸",
    },
    {
      id: 4,
      image: journey,
      title: "Путешественник Элит",
      category: "Утилиты",
      price: "500 200 ₸",
      beforePrice: "620 500 ₸",
    },
    {
      id: 5,
      image: firstHint,
      title: "Образование",
      category: "Новости",
      price: "340 000 ₸",
    },
    {
      id: 6,
      image: secondHint,
      title: "Здоровье и Фитнес",
      category: "Покупки",
      price: "410 000 ₸",
    },
    {
      id: 7,
      image: thirdHint,
      title: "Финансы",
      category: "Социальные сети",
      price: "270 000 ₸",
    },
    {
      id: 8,
      image: clothify,
      title: "Финансы",
      category: "Финансы",
      price: "302 000 ₸",
    },
    {
      id: 9,
      image: spaJourney,
      title: "Путешествия",
      category: "Путешествия",
      price: "322 000 ₸",
    },
    {
      id: 10,
      image: leftOwnImage,
      title: "Развлечения",
      category: "Развлечения",
      price: "343 000 ₸",
    },
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

  categories: [
    {
      id: 4,
      image: journey,
      title: "Путешественник Элит",
      beforePrice: "350 500 ₸",
      price: "500 200 ₸",
    },
    {
      id: 1,
      image: bancking,
      title: "Элитный Планировщик",
      price: "300 500 ₸",
    },
    { id: 3, image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
    {
      id: 2,
      image: calendar,
      title: "Премиум Календарь",
      beforePrice: "350 500 ₸",
      price: "250 500 ₸",
    },

    {
      id: 2,
      image: calendar,
      title: "Премиум Календарь",
      beforePrice: "350 500 ₸",
      price: "250 500 ₸",
    },
    {
      id: 1,
      image: bancking,
      title: "Элитный Планировщик",
      price: "300 500 ₸",
    },
    {
      id: 4,
      image: journey,
      title: "Путешественник Элит",
      beforePrice: "350 500 ₸",
      price: "500 200 ₸",
    },
    { id: 3, image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
    {
      id: 2,
      image: calendar,
      title: "Премиум Календарь",
      beforePrice: "350 500 ₸",
      price: "250 500 ₸",
    },
    {
      id: 1,
      image: bancking,
      title: "Элитный Планировщик",
      price: "300 500 ₸",
    },
    {
      id: 4,
      image: journey,
      title: "Путешественник Элит",
      beforePrice: "350 500 ₸",
      price: "500 200 ₸",
    },
    { id: 3, image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
    {
      id: 4,
      image: journey,
      title: "Путешественник Элит",
      beforePrice: "350 500 ₸",
      price: "500 200 ₸",
    },
    {
      id: 2,
      image: calendar,
      title: "Премиум Календарь",
      beforePrice: "350 500 ₸",
      price: "250 500 ₸",
    },
    {
      id: 1,
      image: bancking,
      title: "Элитный Планировщик",
      price: "300 500 ₸",
    },
    { id: 3, image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
    {
      id: 1,
      image: bancking,
      title: "Элитный Планировщик",
      price: "300 500 ₸",
    },
    { id: 3, image: fitnes, title: "Фитнес Профи", price: "400 500 ₸" },
    {
      id: 4,
      image: journey,
      title: "Путешественник Элит",
      beforePrice: "350 500 ₸",
      price: "500 200 ₸",
    },
    {
      id: 2,
      image: calendar,
      title: "Премиум Календарь",
      beforePrice: "350 500 ₸",
      price: "250 500 ₸",
    },
  ],
  isOpenCart: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setIsOpenCart(state, action) {
      state.isOpenCart = action.payload;
    },
  },
});

export const { setIsOpenCart } = productsSlice.actions;
