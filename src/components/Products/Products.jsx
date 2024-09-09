import React, { useEffect, useState } from "react";
import style from "./Products.module.css";
import uzum from "../../assets/images/uzum.jpg";
import moruq from "../../assets/images/moruq.jpg";
// import erik from "../../assets/images/erik.jpg";
import banan from "../../assets/images/banan.jpg";
import portagal from "../../assets/images/portagal.jpg";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Organic from "../Organic/Organic";
import erik from "../../assets/images/erik.jpg";

const Products = (props) => {
  console.log(props);
  let [searchParam] = useSearchParams();
  let type = searchParam.get("type");

  const cardDatas = [
    {
      img: uzum,
      id: 1,
      productName: "Grapes",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      productPrice: 49,
      inStock: true,
      type: "fruit",
    },
    {
      img: banan,
      id: 2,
      productName: " Kruzo Aero Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: 98,
      inStock: false,
      type: "bread",
    },
    {
      img: banan,
      id: 2,
      productName: " Kruzo Aero Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: 78,
      inStock: false,
      type: "bread",
    },
    {
      img: moruq,
      id: 3,
      productName: "Ergonomic Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: 23,
      inStock: true,
      type: "vegetables",
    },
    {
      img: erik,
      id: 3,
      productName: "Ergonomic Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: "$43.00",
      inStock: true,
      type: "vegetables",
    },
    {
      img: erik,
      id: 3,
      productName: "Ergonomic Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: 13,
      inStock: true,
      type: "meat",
    },
    {
      img: moruq,
      id: 3,
      productName: "Ergonomic Chair",
      productTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",

      productPrice: 63,
      inStock: true,
      type: "meat",
    },
  ];
  console.log(props);
  let [searchParams] = useSearchParams();
  const tip = searchParams.get("type");
  console.log(tip, "TIP");

  const [allProducts, setAllProducts] = useState(cardDatas);
  console.log(allProducts);

  const [sortCriteria, setSortCriteria] = useState("name-asc");
  console.log(sortCriteria);

  useEffect(() => {
    let filterlenmishdata = cardDatas;
    if (tip && tip !== "all") {
      filterlenmishdata = cardDatas.filter(
        (cardDatas) => cardDatas.type === tip
      );
    }

    if (sortCriteria === "name-asc") {
      filterlenmishdata.sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    } else if (sortCriteria === "name-desc") {
      filterlenmishdata.sort((a, b) =>
        b.productName.localeCompare(a.productName)
      );
    } else if (sortCriteria === "price-asc") {
      filterlenmishdata.sort((a, b) => a.productPrice - b.productPrice);
    } else if (sortCriteria === "price-desc") {
      filterlenmishdata.sort((a, b) => b.productPrice - a.productPrice);
    }

    setAllProducts(filterlenmishdata);
  }, [tip, sortCriteria]);

  return (
    <div>
      <div className={style.products}>
        <div className={style.leftProduct}>
          <h1>Our Organic Products</h1>
        </div>
        <div className={style.rightProduct}>
          <div style={{ marginLeft: "100px" }} className={style.allProducts}>
            <div className={style.meat}>
              <button className={style.btn1}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/shop?type=all"}
                >
                  All Products
                </Link>
              </button>
            </div>
            <div>
              {" "}
              {type && (
                <div
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <div className={style.meat}>
                    <button className={style.btn2}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"/shop?type=vegetables"}
                      >
                        Vegetables
                      </Link>
                    </button>
                  </div>
                  <div className={style.meat}>
                    <button className={style.btn2}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"/shop?type=fruit"}
                      >
                        Fruits
                      </Link>
                    </button>
                  </div>
                  <div className={style.meat}>
                    <button className={style.btn2}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"/shop?type=bread"}
                      >
                        Bread
                      </Link>
                    </button>
                  </div>
                  <div className={style.meat}>
                    <button className={style.btn2}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"/shop?type=meat"}
                      >
                        Meat
                      </Link>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {allProducts.map((mehsul, idx) => (
                <div key={idx}>{mehsul.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={style.sortButtons}>
        <button
          className={style.btnlastes}
          onClick={() => setSortCriteria("name-asc")}
        >
          Name A-Z
        </button>
        <button
          className={style.btnlastes}
          onClick={() => setSortCriteria("name-desc")}
        >
          Name Z-A
        </button>
        <button
          className={style.btnlastes}
          onClick={() => setSortCriteria("price-asc")}
        >
          Price Low to High
        </button>
        <button
          className={style.btnlastes}
          onClick={() => setSortCriteria("price-desc")}
        >
          Price High to Low
        </button>
      </div>

      <div className={style.allGrapes}>
        <div
          style={{
            padding: "0px 50px",
            rowGap: "50px",
          }}
          className={style.first}
        >
          {allProducts.map((cardObj, idx) => (
            <div
              style={{
                width: "94%",
                border: "1px solid orange",
                borderRadius: "20px 20px 0px 0px",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={`/shopDetail?hansiproduct=${cardObj.id}`}
                key={idx}
                className={
                  cardObj.inStock === true
                    ? "page1 yellowBackground"
                    : "page1 blueBackground"
                }
              >
                <img
                  className={style.imagesGra}
                  src={cardObj.img}
                  alt={cardObj.productName}
                />
                <span
                  style={{ color: "black", textDecoration: "none" }}
                  className={style.graH2}
                >
                  {cardObj.productName}
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "13px",
                    textAlign: "start",
                    padding: "20px 0px",
                  }}
                  className={style.vegeP}
                >
                  {cardObj.productTitle}
                </span>
                <br />
                <span
                  style={{ color: "black", padding: "20px", color: "#576b6a" }}
                  className={style.price}
                >
                  {cardObj.productPrice}$
                </span>
                <br />
                <span
                  style={{ color: "black" }}
                  className={cardObj.inStock === true ? "greenText" : "redText"}
                >
                  {cardObj.inStock === true ? "In stock" : "Out of stock"}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
