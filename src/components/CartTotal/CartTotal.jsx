import React from "react";
import style from "./CartTotal.module.css";

const CartTotal = () => {
  return (
    <div className={style.mesafe}>
      <div className={style.cartTotal}>
        <h1>
          <strong>Cart</strong> Total
        </h1>
        <div className={style.yanyanashi}>
          <div>
            <h3>Subtotal:</h3>
          </div>
          <div>
            {" "}
            <p>$96.00</p>
          </div>
        </div>
        <div className={style.yanyanashi}>
          <div>
            <h3>Shipping</h3>
          </div>
          <div>
            {" "}
            <p className={style.flat}>
              Flat rate: $3.00 <br /> Shipping to Ukraine.
            </p>
          </div>
        </div>
        <hr />
        <div className={style.yanyanashi}>
          <div>
            <h3>Total</h3>
          </div>
          <div>
            {" "}
            <p>$99.00</p>
          </div>
        </div>
        <hr />
        <button className={style.check}><h3>PROCEED CHECKOUT</h3></button>
      </div>
    </div>
  );
};

export default CartTotal;
