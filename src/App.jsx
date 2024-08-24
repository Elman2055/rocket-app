import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPageContainer from "./containers/mainPageContainer/mainPageContainer";
import ProductPageContainer from "./containers/productPageContainer/ProductPageContainer";
import ProfilePageContainer from "./containers/profilePageContainer/ProfilePageContainer";
import CategoriesContainer from "./containers/categoriesContainer/CategoriesContainer";
import CatalogContainer from "./containers/catalogContainer/CatalogContainer";
import AnswersContainer from "./containers/answersContainer/AnswersContainer";
import ContactsContainer from "./containers/contactsContainer/ContactsContainer";
import AboutContainer from "./containers/aboutContainer/AboutContainer";
import LoginContainer from "./containers/loginContainer/LoginContainer";
import RegisterContainer from "./containers/registerContainer/RegisterContainer";
import ForgotPasswordContainer from "./containers/forgotPasswordContainer/ForgotPasswordContainer";
import FavouritesContainer from "./containers/favouritesContainer/FavouritesContainer";
import AdminLoginContainer from "./containers/adminLoginContainer/AdminLoginContainer";
import AdminLayot from "./components/adminLayot/AdminLayot";
import AdminCategoriesContainer from "./containers/adminCategoriesContainer/AdminCategoriesContainer";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPageContainer />} />
            <Route path="product/:id" element={<ProductPageContainer />} />
            <Route path="profile" element={<ProfilePageContainer />} />
            <Route path="categories" element={<CategoriesContainer />} />
            <Route path="catalog/:id" element={<CatalogContainer />} />
            <Route path="answers" element={<AnswersContainer />} />
            <Route path="contacts" element={<ContactsContainer />} />
            <Route path="about" element={<AboutContainer />} />
            <Route path="login" element={<LoginContainer />} />
            <Route path="register" element={<RegisterContainer />} />
            <Route path="password" element={<ForgotPasswordContainer />} />
            <Route path="favourites" element={<FavouritesContainer />} />
          </Route>

          <Route path="lg-admin" element={<AdminLoginContainer />} />

          <Route path="/admin" element={<AdminLayot />}>
            <Route path="categories" element={<AdminCategoriesContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
