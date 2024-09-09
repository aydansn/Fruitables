import React from "react";
import { CarOutlined } from "@ant-design/icons";
import { UserSwitchOutlined } from "@ant-design/icons";
import { ArrowsAltOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";
import style from "./Shipping.module.css";

const Shipping = () => {
  return (
    <div className={style.shipping}>
      <div className={style.allShipping}>
        <div className={style.free}>
          <div className={style.car}>
            <CarOutlined />
          </div>
          <h3>Free Shipping</h3>
          <p className={style.over}>Free on order over $300</p>
        </div>
        <div className={style.free}>
          <div className={style.car}>
            <UserSwitchOutlined />
          </div>
          <h3>Security Payment</h3>
          <p className={style.over}>100% security payment</p>
        </div>
        <div className={style.free}>
          <div className={style.car}>
            <ArrowsAltOutlined />
          </div>
          <h3>30 Day Return</h3>
          <p className={style.over}>30 day money guarantee</p>
        </div>
        <div className={style.free}>
          <div className={style.car}>
            <PhoneOutlined />
          </div>
          <h3>24/7 Support</h3>
          <p className={style.over}>Support every time fast</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
