import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPageContainer from "./containers/mainPageContainer/mainPageContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPageContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
