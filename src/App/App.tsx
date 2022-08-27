import React from "react";

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CoinPage from "./pages/CoinPage";
import Market from "./pages/Market";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Market />} />
          <Route path="/coin">
            <Route path=":id" element={<CoinPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
