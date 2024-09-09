import React from "react";
import erikBack from "../../assets/images/erikBack.jpg";
import style from "./DetailShop.module.css";

const DetailShop = (props) => {
  console.log(props);
  return (
    <div>
      <div className={style.erikBack}>
        <div className={style.erikler}>
          <h1>{props.title}</h1>
          <p className={style.pagesler}>
            <strong>{props.describtion}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailShop;
