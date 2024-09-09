import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DetailShop from "../components/DetailShop/DetailShop";
import Cart from "../components/Cart/Cart";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <DetailShop title={"Contact"} describtion={"Home / Pages / Contact"} />
      <Cart />
      <Footer />
    </div>
  );
};

export default Contact;
