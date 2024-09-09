import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Products from "../components/Products/Products";
import { Link } from "react-router-dom";

const Shop = (props) => {
  console.log(props.product, "PROPS");
  return (
    <div>
      <Navbar />
      <Products product={props.product} />
      {/* <Link to={`/shop?type=all`}>All Products</Link> */}
      <Footer />
    </div>
  );
};

export default Shop;
