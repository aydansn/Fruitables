import React from "react";
import style from "./Store.module.css";
import appleBasket from "../../assets/images/appleBasket.png";

const Store = () => {
  return (
    <div className={style.store}>
      <div className={style.allStore}>
        <div className={style.leftStore}>
          <h1>Fresh Exotic <br /> Fruits</h1>
          <h2>in Our Store</h2>
          <p>
            The generated Lorem Ipsum is therefore always free from repetition 
            injected humour, or non-characteristic words etc.
          </p>
          {/* <button>BUY</button> */}
        </div>
        <div className={style.rightStore}>
            <button><h1 style={{color: "black"}}>1kg $</h1></button>
          <img src={appleBasket} alt="appleBasket" />
        </div>
      </div>
    </div>
  );
};

export default Store;
