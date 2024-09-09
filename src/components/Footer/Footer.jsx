import React from "react";
import { TwitterOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { YoutubeOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import { CopyrightOutlined } from "@ant-design/icons";
import style from "./Footer.module.css";
import payment from "../../assets/images/payment.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.allfooter}>
        <div className={style.leftfoot}>
          <h1>Fruitables</h1>
          <p className={style.freshProduct}> Fresh products</p>
        </div>
        <div className={style.centerfoot}>
          <input type="text" placeholder="Your Email" />
          <button className={style.sebscribe}>Subscribe Now</button>
        </div>
        <div className={style.rightfood}>
          <div className={style.allIcons}>
            <div className={style.icon1}>
              <TwitterOutlined />
            </div>
            <div className={style.icon1}>
              <FacebookOutlined />
            </div>
            <div className={style.icon1}>
              <YoutubeOutlined />
            </div>
            <div className={style.icon1}>
              <LinkedinOutlined />
            </div>
          </div>
        </div>
      </div>
      <hr className={style.hr} />
      <div className={style.allList}>
        <div className={style.list10}>
          <ul>
            Why People Like us!
            <li>typesetting, remaining</li>
            <li>essentially unchanged. It was</li>
            <li>popularised in the 1960s with</li>
            <li>the like Aldus PageMaker</li>
            <li>including of Lorem Ipsum.</li>
          </ul>
        </div>

        <div className={style.list1}>
          <ul>
            Shop Info
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Return Policy</li>
            <li>FAQs & Help</li>
          </ul>
        </div>

        <div className={style.list1}>
          <ul>
            Account
            <li>My Account</li>
            <li>Shop details</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Order History</li>
            <li>International Orders</li>
          </ul>
        </div>

        <div className={style.list1}>
          <ul>
            Contact
            <li>
              Address: 1429 Netus Rd, NY <br /> 48247
            </li>
            <li>Email: Example@gmail.com</li>
            <li>Phone: +0123 4567 8910</li>
            <li>Payment Accepted</li>
            <img src={payment} alt="payment" />
          </ul>
        </div>
      </div>
      <div className={style.readdiv}>
        {" "}
        <button className={style.readMore}>Read More</button>
      </div>
      <div className={style.lastfooter}>
        <div className={style.your}>
          <CopyrightOutlined />
          Your Site Name, All right reserved.
        </div>
        <div className={style.your}>
          Designed By HTML Codex Distributed By ThemeWagon
        </div>
      </div>
    </div>
  );
};

export default Footer;
