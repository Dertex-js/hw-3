import React from "react";

import "./index.scss";
import "@config/configureMobX";
import ReactDOM from "react-dom/client";
import * as Router from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router.BrowserRouter>
      <App />
    </Router.BrowserRouter>
  </React.StrictMode>
);
