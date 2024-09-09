import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import uzum from "./assets/images/uzum.jpg";
import banan from "./assets/images/banan.jpg";
import moruq from "./assets/images/moruq.jpg";
import erik from "./assets/images/erik.jpg";

import React from "react";
import Products from "./components/Products/Products";
import NotFoundPage from "./components/Cart/NotFoundPage";

const App = () => {
  const cardDatas = [
    {
      img: uzum,
      id: 1,
      productName: "Grapes",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      productPrice: " $4.99 / kg",
      inStock: true,
    },
    {
      img: banan,
      id: 2,
      productName: " Kruzo Aero Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: "$78.00",
      inStock: false,
    },
    {
      img: moruq,
      id: 3,
      productName: "Ergonomic Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: "$43.00",
      inStock: true,
    },
    {
      img: erik,
      id: 3,
      productName: "Ergonomic Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: "$43.00",
      inStock: true,
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home product={cardDatas} />} />
          <Route path="/home" element={<Home product={cardDatas} />} />
          <Route path="/shop" element={<Shop product={cardDatas} />} />
          <Route
            path="/shopdetail"
            element={<ShopDetail product={cardDatas} />}
          />

          <Route path="/pages" element={<Pages product={cardDatas} />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/contact" element={<Contact product={cardDatas} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
