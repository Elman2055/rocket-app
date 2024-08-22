import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPageContainer from "./containers/mainPageContainer/mainPageContainer";
import ProductPageContainer from "./containers/productPageContainer/ProductPageContainer";
import ProfilePageContainer from "./containers/profilePageContainer/ProfilePageContainer";
import CategoriesContainer from "./containers/categoriesContainer/CategoriesContainer";
import CatalogContainer from "./containers/catalogContainer/CatalogContainer";
import AnswersContainer from "./containers/answersContainer/AnswersContainer";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
