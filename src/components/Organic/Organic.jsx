import React from "react";
import style from "./Organic.module.css";
import lobya from "../../assets/images/lobya.jpg";

const Organic = () => {
  return <div>
   <div>
   <div className={style.backImage}>
    <div className={style.allOrganic}>
    <div className={style.left}>
        <p className={style.foods}><strong>100% Organic Foods</strong></p>
        <h1>Organic Veggies & <br /> Fruits Foods</h1>
        {/* <input className={style.orgint} type="text" placeholder="Search" />
        <button className={style.btnOrg} >Submit Now</button> */}
    </div>
    <div className={style.right}>
        <img src={lobya} alt="lobya" />
        {/* <button className={style.vesitables}>Vesitables</button> */}
    </div>
    </div>
    </div>
   </div>
  </div>;
};

export default Organic;
