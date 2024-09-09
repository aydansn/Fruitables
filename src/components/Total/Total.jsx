import React from "react";
import style from "./Total.module.css";
import bananas from "../../assets/images/bananas.png";
import { XOutlined } from "@ant-design/icons";
import { useState } from "react";
import poteto from "../../assets/images/poteto.jpg";
import brokoli from "../../assets/images/brokoli.jpg";

const Total = () => {
  const [name, setName] = useState(1);

  const handleDecrement = () => {
    setName((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        return 0;
      }
    });
  };
  const handleIncrement = () => {
    setName((prevState) => prevState + 1);
  };
  return (
    <div>
      <div className={style.allTotal}>
        <div className={style.productsDiv}>
          <div className={style.allOfProce}>
            <h4>Products</h4>
          </div>
          <div className={style.allOfProce}>
            <h4>Name</h4>
          </div>
          <div className={style.allOfProce}>
            <h4 className={style.priceH4}>Price</h4>
          </div>
          <div className={style.allOfProce}>
            <h4>Quantity</h4>
          </div>
          <div className={style.allOfProce}>
            <h4>Total</h4>
          </div>
          <div className={style.allOfProce}>
            <h4>Handle</h4>
          </div>
        </div>
        <hr />
        <div className={style.aboutFruit}>
          <img src={bananas} alt="banan" />
          <div className={style.bigBanana}>Big Banana</div>
          <div className={style.bigBanana}>2.99 $</div>
          <div className={style.counter}>
            <div className={style.allBtns}>
              <button className={style.btn1} onClick={handleDecrement}>
                -
              </button>
              <div className={style.reqem}>{name}</div>
              <button className={style.btn1} onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
          <div className={style.bigBanana}>2.99 $</div>
          <div className={style.bigBanana}>
            <button>
              <XOutlined />
            </button>
          </div>
        </div>
        <hr />
        <div className={style.aboutFruit}>
          <img src={poteto} alt="poteto" />
          <div className={style.bigBanana}>Potatoes</div>
          <div className={style.bigBanana}>2.99 $</div>
          <div className={style.counter}>
            <div className={style.allBtns}>
              <button className={style.btn1} onClick={handleDecrement}>
                -
              </button>
              <div className={style.reqem}>{name}</div>
              <button className={style.btn1} onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
          <div className={style.bigBanana}>2.99 $</div>
          <div className={style.bigBanana}>
            <button>
              <XOutlined />
            </button>
          </div>
        </div>
        <hr />
        <div className={style.aboutFruit}>
          <img src={brokoli} alt="brokoli" />
          <div className={style.bigBanana}>Awesome Br</div>
          <div className={style.bigBanana}>2.99 $</div>
          <div className={style.counter}>
            <div className={style.allBtns}>
              <button className={style.btn1} onClick={handleDecrement}>
                -
              </button>
              <div className={style.reqem}>{name}</div>
              <button className={style.btn1} onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
          <div style={{paddingRight: "20px"}} className={style.bigBananas}>2.99 $</div>
          <div className={style.bigBanana}>
            <button>
              <XOutlined />
            </button>
          </div>
        </div>
      </div>
      <div className={style.coupon}>
        <div className={style.yanYana}>
            <div className={style.buttons1}><input type="text" placeholder="Coupon Code" /></div>
            <div className={style.buttons2}><button>Apply Coupon </button></div>
        </div>
      </div>
    </div>
  );
};

export default Total;
