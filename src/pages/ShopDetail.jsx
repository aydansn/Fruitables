import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DetailShop from "../components/DetailShop/DetailShop";
import Grapes from "../components/Grapes/Grapes";

const ShopDetail = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar />
      <DetailShop title="Shop Detail" describtion="Home / Pages / Shop Detail" />
      <Grapes product={props.product} />
      <Footer />
    </div>
  );
};

export default ShopDetail;
