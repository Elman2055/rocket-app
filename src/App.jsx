import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPageContainer from "./containers/mainPageContainer/mainPageContainer";
import ProductPageContainer from "./containers/productPageContainer/ProductPageContainer";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
