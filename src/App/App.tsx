import React from "react";

import "./App.scss";
import { routes } from "@config/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CoinPage from "./pages/CoinPage";
import Market from "./pages/Market";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={routes.market} element={<Market />} />
          <Route path={routes.coinPage}>
            <Route path={routes.coinId} element={<CoinPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
