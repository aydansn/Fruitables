import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DetailShop from "../components/DetailShop/DetailShop";
import Total from "../components/Total/Total";
import CartTotal from "../components/CartTotal/CartTotal";

const Pages = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar />
      <DetailShop title={"Cart"} describtion={"Home / Pages / Cart"} />
      {/* <Cart /> */}
      <Total />
      <CartTotal />
      <Footer />
    </div>
  );
};

export default Pages;
