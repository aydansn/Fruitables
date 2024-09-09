import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Organic from "../components/Organic/Organic";
import Shipping from "../components/Shipping/Shipping";
import Products from "../components/Products/Products";
import Fresh from "../components/Fresh/Fresh";
import Vegetables from "../components/Vegetables/Vegetables";
import Store from "../components/Store/Store";
import Bestseller from "../components/Bestseller/Bestseller";
import Customers from "../components/Customers/Customers";
import Saying from "../components/Saying/Saying";
import { Link } from "react-router-dom";

const Home = (props) => {
  console.log("Home props");
  return (
    <div>
      <Navbar />
      <Organic />
      <Shipping />
      <Products product={props.product} />
      <Fresh />
      <Vegetables />
      <Store />
      <Bestseller />
      <Customers />
      <Saying />
      <Footer />
    </div>
  );
};

export default Home;
