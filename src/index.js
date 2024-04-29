import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hjem from "./pages/hjem";
import Information from "./pages/information"
import Kalender from "./pages/kalender"
import Tilmelding from "./pages/tilmelding"
import Bestyrelse from "./pages/bestyrelse/index"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route index element={<Hjem />} />
      <Route path="information" element={<Information />} />
      <Route path="kalender" element={<Kalender />} />
      <Route path="tilmelding" element={<Tilmelding />} />
      <Route path="bestyrelse" element={<Bestyrelse />} />

      </Route>
    </Routes>
    </BrowserRouter>
    <Header>
      <App />
    </Header>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
