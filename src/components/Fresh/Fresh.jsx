import React from "react";
import style from "./Fresh.module.css";
import alma from "../../assets/images/alma.jpg";
import cilek from "../../assets/images/cilek.jpg";
import brokoli from "../../assets/images/brokoli.jpg";

const Fresh = () => {
  return (
    <div className={style.allFresh}>
      <div className={style.fresh}>
        <div className={style.apple}>
          <img src={alma} alt="alma" />
          <div className={style.box}>
            <h2 className={style.freshapple}>Fresh Apples</h2>
            <h1>20% OFF</h1>
          </div>
        </div>
      </div>

      <div className={style.fresh}>
        <div className={style.apple}>
          <img src={cilek} alt="alma" />
          <div className={style.box}>
            <h2 className={style.freshapple}>Fresh Apples</h2>
            <h1>20% OFF</h1>
          </div>
        </div>
      </div>

      <div className={style.fresh}>
        <div className={style.apple}>
          <img src={brokoli} alt="alma" />
          <div className={style.box}>
            <h2 className={style.freshapple}>Fresh Apples</h2>
            <h1>20% OFF</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fresh;
