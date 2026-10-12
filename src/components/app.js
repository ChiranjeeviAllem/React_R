import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Body />
          </>
        }
      />
    </Routes>
  </BrowserRouter>,
);
