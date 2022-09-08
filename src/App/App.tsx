import React from "react";

import "./App.scss";
import { routes } from "@config/routes";
import { Navigate, Route, Routes } from "react-router-dom";

import CoinPage from "./pages/CoinPage";
import Market from "./pages/Market";
import Search from "./pages/Search";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.market} element={<Market />} />
        <Route path={routes.coinPage}>
          <Route path={routes.coinId} element={<CoinPage />} />
        </Route>
        <Route path={routes.search} element={<Search />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
