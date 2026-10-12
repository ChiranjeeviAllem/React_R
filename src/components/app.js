import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Body from "./Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
);
