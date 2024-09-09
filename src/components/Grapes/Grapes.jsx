import React from "react";
import style from "./Grapes.module.css";
import uzum from "../../assets/images/uzum.jpg";
import banan from "../../assets/images/banan.jpg";
import moruq from "../../assets/images/moruq.jpg";
import erik from "../../assets/images/erik.jpg";
import { StarOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Grapes = (props) => {
  const cardDatas = [
    {
      img: uzum,
      id: 1,
      productName: "Grapes",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      productPrice: " $4.99 / kg",
      inStock: true,
    },
    {
      img: banan,
      id: 2,
      productName: " Kruzo Aero Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: "$78.00",
      inStock: false,
    },
    {
      img: moruq,
      id: 3,
      productName: "Ergonomic Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: "$43.00",
      inStock: true,
    },
    {
      img: erik,
      id: 3,
      productName: "Ergonomic Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: "$43.00",
      inStock: true,
    },
  ];
  console.log(props);

  const [searchParams] = useSearchParams();
  console.log(searchParams, "search params"); 
  console.log(props, "PROPS PRODUCTS");
  let id = searchParams.get("hansiproduct");
  console.log(id, "id");
  const products = cardDatas.filter((product) => product.id === Number(id));
  console.log(products, "product Data");

  const [name, setName] = useState(0);

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
    <div className={style.allGrapes}>
      <div className={style.containerGrap}>
        <div className={style.allGrapes}>
          <div className={style.imagesGra}>
            <img src={uzum} alt="uzum" />
          </div>
          <div className={style.aboutGra}>
            <h2 className={style.graH2}>Grapes</h2>
            <p className={style.vegeP}>Category: Vegetables</p>
            <h2  className={style.price}>3,35 $</h2>
            <div className={style.allIconslar}>
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </div>
            <p className={style.the}>
              The generated Lorem Ipsum is therefore always free from repetition
              injected humour, or non- <br />
              characteristic words etc.
            </p>
            <p className={style.the2}>
              Susp endisse ultricies nisi vel quam suscipit. <br /> Sabertooth
              peacock flounder; chain pickerel <br /> hatchetfish, pencilfish
              snailfish
            </p>
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

            {/* <button className={style.addCart}>Add to cart</button>
         */}
          </div>
          <div className={style.categories}>
            <input type="text" placeholder="keywords" />
            <h2>Categories</h2>
            <div className={style.yanYanas}>
              <div className={style.apples}>Apples</div>
              <div className={style.numbers}>(3)</div>
            </div>

            <div className={style.yanYanas}>
              <div className={style.apples}>Oranges</div>
              <div className={style.numbers}>(5)</div>
            </div>

            <div className={style.yanYanas}>
              <div className={style.apples}>Strawbery</div>
              <div className={style.numbers}>(2)</div>
            </div>

            <div className={style.yanYanas}>
              <div className={style.apples}>Banana</div>
              <div className={style.numbers}>(8)</div>
            </div>

            <div className={style.yanYanas}>
              <div className={style.apples}>Pumpkin</div>
              <div className={style.numbers}>(3)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grapes;
