import React from "react";
import style from "./Bestseller.module.css";
import portagal from "../../assets/images/portagal.jpg";
import moruq from "../../assets/images/moruq.jpg";
import bananas from "../../assets/images/bananas.png";
import uzum from "../../assets/images/uzum.jpg";
import erik from "../../assets/images/erik.jpg";
import apples from "../../assets/images/apples.jpg";
import { StarOutlined } from "@ant-design/icons";
import { ShoppingOutlined } from "@ant-design/icons";
const Bestseller = () => {
  return (
    <div>
      <div className={style.bestseller}>
        <h1 className={style.bestProduct}>Bestseller Products</h1>
        <p className={style.bestP}>
          Latin words, combined with a handful of model sentence structures, to
          generate Lorem <br /> Ipsum which looks reasonable.
        </p>
      </div>
      <div className={style.allOrganic}>
        <div className={style.tomato}>
          <img src={portagal} alt="portagal" />
          <div>
            <h3>
              Organic <br /> Tomato
            </h3>
            <div className={style.allIconslar}>
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </div>
            <h3 className={style.price}>3.12 $</h3>
            <button style={{ padding: "20px" }}>
              {" "}
              <ShoppingOutlined /> Add to <br /> card
            </button>
          </div>
        </div>

        <div className={style.tomato}>
          <img src={moruq} alt="portagal" />
          <div>
            <h3>
              Organic <br /> Tomato
            </h3>
            <div className={style.allIconslar}>
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </div>
            <h3 className={style.price}>3.12 $</h3>
            <button>
              {" "}
              <ShoppingOutlined /> Add to <br /> card
            </button>
          </div>
        </div>

        <div className={style.tomato}>
          <img src={bananas} alt="portagal" />
          <div>
            <h3>
              Organic <br /> Tomato
            </h3>
            <div className={style.allIconslar}>
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </div>
            <h3 className={style.price}>3.12 $</h3>
            <button>
              {" "}
              <ShoppingOutlined /> Add to <br /> card
            </button>
          </div>
        </div>
      </div>
      <div className={style.allOrganic}>
        <div className={style.tomato}>
          <img src={erik} alt="portagal" />
          <div>
            <h3>
              Organic <br /> Tomato
            </h3>
            <div className={style.allIconslar}>
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </div>
            <h3 className={style.price}>3.12 $</h3>
            <button className={style.btnbest}>
              {" "}
              <ShoppingOutlined /> Add to <br /> card
            </button>
          </div>
        </div>

        <div className={style.tomato}>
          <img src={uzum} alt="portagal" />
          <div>
            <h3>
              Organic <br /> Tomato
            </h3>
            <div className={style.allIconslar}>
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </div>
            <h3 className={style.price}>3.12 $</h3>
            <button>
              {" "}
              <ShoppingOutlined /> Add to <br /> card
            </button>
          </div>
        </div>

        <div className={style.tomatos}>
          <img src={apples} alt="portagal" />
          <div>
            <h3>
              Organic <br /> Tomato
            </h3>
            <div className={style.allIconslar}>
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </div>
            <h3 className={style.price}>3.12 $</h3>
            <button>
              {" "}
              <ShoppingOutlined /> Add to <br /> card
            </button>
          </div>
        </div>
      </div>
      <div className={style.allAdd}>
        <div className={style.num1}>
          <img src={portagal} alt="" />
          <h3 className={style.organicTomato}>Organic Tomato</h3>
          <div className={style.allIconslar}>
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
          </div>
          <h3>3.12 $</h3>
          <button className={style.btnlastBest}>
            {" "}
            {/* <ShoppingOutlined /> Add to card */}
          </button>
        </div>
        <div className={style.num1}>
          <img src={moruq} alt="" />
          <h3 className={style.organicTomato}>Organic Tomato</h3>
          <div className={style.allIconslar}>
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
          </div>
          <h3>3.12 $</h3>
          {/* <button className={style.btnlastBest}>
            {" "}
            <ShoppingOutlined /> Add to card
          </button> */}
        </div>
        <div className={style.num1}>
          <img src={bananas} alt="" />
          <h3 className={style.organicTomato}>Organic Tomato</h3>
          <div className={style.allIconslar}>
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
          </div>
          <h3>3.12 $</h3>
          {/* <button className={style.btnlastBest}>
            {" "}
            <ShoppingOutlined /> Add to card
          </button> */}
        </div>
        <div className={style.num1}>
          <img src={erik} alt="" />
          <h3 className={style.organicTomato}>Organic Tomato</h3>
          <div className={style.allIconslar}>
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
          </div>
          <h3>3.12 $</h3>
          {/* <button className={style.btnlastBest}>
            {" "}
            <ShoppingOutlined /> Add to card
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
