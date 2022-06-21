import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MealProvider from "./store/MealProvider";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <MealProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MealProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
