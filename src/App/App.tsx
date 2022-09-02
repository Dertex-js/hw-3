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
          <Route path={routes.Market} element={<Market />} />
          <Route path={routes.CoinPage}>
            <Route path={routes.CoinId} element={<CoinPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
