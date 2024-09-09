import React from "react";
import style from "./Vegetables.module.css";
import goyerti from "../../assets/images/goyerti.jpg";
import pomidor from "../../assets/images/pomidor.jpg";
import biber from "../../assets/images/biber.jpg";
import bananas from "../../assets/images/bananas.png";
import { ShoppingOutlined } from "@ant-design/icons";

const Vegetables = () => {
  return (
    <div className={style.vegetables}>
      <h1>Fresh Organic Vegetables</h1>

      <div className={style.allGrapes}>
        <div className={style.first}>
          <img src={goyerti} alt="goyerti" />
          <div className={style.start}>
            <h2>Parsely</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> sed
              do eiusmod te <br /> incididunt
            </p>
            <h3>$4.99 / kg</h3>
            {/* <button className={style.firstBtn}>
              {" "}
              <ShoppingOutlined /> Add to card
            </button> */}
          </div>
        </div>

        <div className={style.first}>
          <img src={pomidor} alt="pomidor" />

          <div className={style.start}>
            <h2>Persely</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> sed
              do eiusmod te <br /> incididunt
            </p>
            <h3>$4.99 / kg</h3>
            {/* <button  className={style.firstBtn}>
              {" "}
              <ShoppingOutlined /> Add to card
            </button> */}
          </div>
        </div>

        <div className={style.first}>
          <img src={bananas} alt="banan" />

          <div className={style.start}>
            <h2>Banana</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> sed
              do eiusmod te <br /> incididunt
            </p>
            <h3>$4.99 / kg</h3>
            {/* <button  className={style.firstBtn}>
              {" "}
              <ShoppingOutlined /> Add to card
            </button> */}
          </div>
        </div>

        <div className={style.first}>
          <img src={biber} alt="erik" />

          <div className={style.start}>
            <h2>Bell Papper</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> sed
              do eiusmod te <br /> incididunt
            </p>
            <h3>$4.99 / kg</h3>
            {/* <button  className={style.firstBtn}>
              {" "}
              <ShoppingOutlined /> Add to card
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vegetables;
